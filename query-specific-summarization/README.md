![](teaserV8.png)

# Paper
Kemal CIZMECILER, Erkut Erdem and Aykut Erdem. "Leveraging Semantic Saliency Maps for Query-Specific Video Summarization ", Multimedia Tools and Applications, to appear.
[pdf](https://vision.cs.hacettepe.edu.tr/publication/fulltext/?.pdf)

# ARS DATASET
This dataset contains video sets collected from publicly available Youtube videos. 

we focus on crowd videos as they can be annotated with a rich set of attributes about the observed activities, actors and events. Here we use complex query terms such as ‘fight between fans’ and ‘running and swimming’. In total, we collected 10 videos, including music and movie clips with 720 × 1280 resolution. The duration of the videos changes
between 2-12 minutes. More specifically, there is a video log about a triathlon race, which contains running, swimming and biking activities. There exist 3 music videos, mainly showing cheering fans in stadiums or streets. There are 3 movie clips, which respectively show a battlefield scene with a ceremony in a church, dancers in a car and in a club, and finally an orchestra band on a stage with full of dancing people in front of them. Lastly, there is a rock festival video, which contains singing, resting on a beach and playing activities.



| Video name | attribute contained | Number of Frames | Duration | Number of queries | Shots Contained 
|-------------|:---------------:|:--------------------:|:----------------:|:----------------:|:----------------:|
| Triathlon   | 19            | 10971                  | 12:12            |15|  82|
| LetItBe   | 20              | 5623                  | 03:54            |23|  75|
| HoldMeTight   | 13              | 3393                  | 01:53            |12| 37|
| FansFighting   | 17             | 14832                  | 08:14            |13|  48|
| WavinFlag   | 21             | 6736                  | 03:44            |7|  45|
| KNAANMusicVideo   | 22             | 6424                  | 04:16            |11|  70|
| TarkanMusicClip   | 17             | 6876                  | 04:35            |13| 81|
| ThePianist   | 18             | 10831                  | 06:01            |16|  59|
| RockFestival   | 16             | 10734                  | 05:57            |18|  42|
| ComeTogether   | 14             | 6819                  | 03:48            |14|  38|

| **Total**   | **??**         | **??**             | **??**       |**??**|

For each video, .. provided.

## How To Download

You can download the video files identified by video IDs [here](??).





 

User annotations of individual shots are here???

Ground truth human summaries are also provided as *.txt* files. Each video contains here??

Example comparison from RAD dataset
![ARS_example](https://user-images.githubusercontent.com/2372136/125176190-35671400-e1da-11eb-9243-128a4fe4a4b5.png)
![RAD_example](https://user-images.githubusercontent.com/2372136/125176191-36984100-e1da-11eb-8788-4c309c2d2c27.png)



	vid1	vid2	vid3	vid4	vid5	vid6	vid7	vid8	vid9	vid10
stage	4	0	3	0	0	0	0	0	2	0
kneel	5	3	0	0	1	0	0	0	1	0
photograph	4	0	0	0	0	0	0	0	0	0
swimmer	4	0	0	0	0	0	0	0	0	0
sit	1	6	1	0	1	0	2	6	4	2
platform	1	0	0	0	0	0	0	1	0	1
beach	1	0	0	0	0	2	0	0	8	0
photographer	1	0	0	0	0	0	0	0	0	0
concert	0	2	0	0	0	0	0	0	2	0
church	0	5	0	0	0	0	0	0	0	0
battlefield	0	1	0	0	0	0	0	3	0	0
audience	0	6	0	0	0	0	1	0	0	3
performer	0	3	2	0	0	0	0	0	1	2
police	0	2	0	5	0	0	0	3	0	0
choir	0	2	0	0	0	1	1	0	0	0
soldier	0	4	0	0	0	0	0	0	0	0
walk	0	5	1	0	3	1	3	1	0	3
dancer	0	0	5	0	0	2	2	0	0	2
star	0	0	4	0	2	1	0	0	0	2
cheer	0	0	3	3	0	0	0	0	1	1
wave	0	0	0	4	1	0	1	0	3	0
street	0	0	0	1	1	2	2	0	1	2
fight	0	0	0	4	0	0	0	4	0	0
protest	0	0	0	4	0	0	0	0	0	0
dance	0	0	0	0	2	1	1	0	3	1
run	0	0	0	0	1	1	1	0	0	0
runner	0	0	0	0	0	3	0	1	0	0
stadium	0	0	0	0	0	0	1	0	0	0
performance	0	3	0	0	0	0	1	0	3	3
subway	0	0	0	0	0	1	2	5	0	0
war	0	1	0	0	0	0	0	3	0	0
queue	0	0	0	0	0	0	0	2	0	0
stand	0	0	0	0	0	0	0	0	4	1
ceremony	4	0	0	0	1	0	0	0	0	0
student	1	0	0	0	0	1	0	0	0	0
model	1	0	0	0	0	0	0	0	0	0
watch performance	1	0	0	0	0	0	0	0	0	0
rink	2	0	0	1	0	0	0	0	0	1
chorus	0	1	0	0	0	3	0	0	0	0
temple	0	1	0	0	0	0	0	0	0	0
skater	0	1	0	0	0	0	1	0	0	0
band_performance	0	0	1	0	0	0	4	0	1	0
shopping	0	0	2	0	0	0	0	0	0	0
swim	0	0	1	0	0	0	0	0	0	0
escalator	0	0	1	0	0	0	0	0	0	0
applaud	0	0	0	1	0	1	0	0	1	0
buy_ticket	0	0	0	1	0	0	0	0	0	1
check-in/out	0	0	0	1	0	0	0	0	0	0
checkinout	0	0	0	1	0	0	0	0	0	0
pilgrimage	0	0	0	0	1	0	1	0	0	0
outdoor	0	0	0	0	0	1	0	0	0	0
parade	0	0	0	0	0	1	0	0	0	0
teacher	0	0	0	0	0	0	1	0	0	0
newly-wed couple	0	0	0	0	0	0	1	0	0	0
dining	0	0	0	0	0	0	0	2	0	0
picnic	0	0	0	0	0	0	0	1	0	0
marathon	0	0	0	0	0	0	0	0	1	0
carnival	0	0	0	0	0	0	0	0	0	1
stock_exchange	0	0	0	0	0	0	0	0	0	1
graduation	0	0	0	0	0	0	0	0	0	1
![image](https://user-images.githubusercontent.com/2372136/125176492-7cee9f80-e1dc-11eb-9e8e-7c5a4d6a16e6.png)




## Acknowledgements

This work was supported in part by GEBIP 2018 Award of the Turkish Academy of Sciences to E. Erdem, BAGEP 2021 Award of the Science Academy to A. Erdem.
