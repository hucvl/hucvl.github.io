import os
import json
import sys

def set_ans(dataset):
    f = open(dataset)
    data = json.loads(f.read())["data"]
    f.close()
    answers = dict()
    for d in data:
        ans = d["answer"]
        task = d["task"]
        if task not in answers.keys():
            answers[task] = []
        answers[task].append(int(d["answer"]))
    return answers

def evaluate(pred_file, truth_file, out):
    score_file = open(out,"w")
    pred = open(pred_file)
    pred_data = json.loads(pred.read())
    truth_data = set_ans(truth_file) 
    score_dict = {"textual_cloze":0,"visual_cloze":0,"visual_ordering":0,"visual_coherence":0}
    for d in pred_data:
        answers = pred_data[d]
        tru =  truth_data[d.split(".")[0]]
        correct = 0.
        for a, g in zip(answers, tru):
            if a == g:
                correct += 1
        score_dict[d.split(".")[0]] = float(correct)/len(tru)

    json.dump(score_dict, score_file)
    pred.close()
    score_file.close()

evaluate(sys.argv[1], sys.argv[2], sys.argv[3])
