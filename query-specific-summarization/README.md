![](teaserV8.png)

# Paper
Kemal CIZMECILER, Erkut Erdem and Aykut Erdem. "Leveraging Semantic Saliency Maps for Query-Specific Video Summarization ", Multimedia Tools and Applications, to appear.
[pdf](https://vision.cs.hacettepe.edu.tr/publication/fulltext/?.pdf)

# ARS DATASET
This dataset contains video sets collected from publicly available Youtube videos. 

we focus on crowd videos as they can be annotated with a rich set of attributes about the observed activities, actors and events. Here we use complex query terms such as ‘fight between fans’ and ‘running and swimming’. In total, we collected 10 videos, including music and movie clips with 720 × 1280 resolution. The duration of the videos changes
between 2-12 minutes. More specifically, there is a video log about a triathlon race, which contains running, swimming and biking activities. There exist 3 music videos, mainly showing cheering fans in stadiums or streets. There are 3 movie clips, which respectively show a battlefield scene with a ceremony in a church, dancers in a car and in a club, and finally an orchestra band on a stage with full of dancing people in front of them. Lastly, there is a rock festival video, which contains singing, resting on a beach and playing activities.



| Video ID| Video name | Attribute Count | Number of Frames | Duration | Number of Queries | Shot Count | Youtube Link 
|-------------|-------------|:---------------:|:--------------------:|:----------------:|:----------------:|:----------------:|:----------------:|
|1| Triathlon   | 19            | 10971                  | 12:12            |15|  82| k17Kg1owKSw|
|2| LetItBe   | 20              | 5623                  | 03:54            |23|  75| ShNnEDb4wFA|
|3| HoldMeTight   | 13              | 3393                  | 01:53            |12| 37| JdzSuH-azJs|
|4| FansFighting   | 17             | 14832                  | 08:14            |13|  48| hjowpb2maAM|
|5| WavinFlag   | 21             | 6400                  |  04:16           |7|  45|  TR2o9GY8u60|
|6| KNAANMusicVideo   | 22            | 6736                  |  03:44           |11|  70|  WTJSt4wP2ME|
|7| TarkanMusicClip   | 17             | 6876                  | 04:35            |13| 81| EBwjmeDoE6A |
|8| ThePianist   | 18             | 10831                  | 06:01            |16|  59| DENCBZF0wd8 |
|9| RockFestival   | 16             | 10734                  | 05:57            |18|  42| hRgcDHO2eII|
|10| ComeTogether   | 14             | 6819                  | 03:48            |14|  38| wH6eiCJ9SDs |

| **Total**   | **??**         | **??**             | **??**       |**??**|



## How To Download


Attribute list and annotations are provided as as mat file, and ground truth human summaries also provided as *.txt* files. 
[user_summaries_annotations.zip](https://github.com/hucvl/hucvl.github.io/files/6799153/user_summaries_annotations.zip)

Queries in videos are here [attributes_in_queries.zip](https://github.com/hucvl/hucvl.github.io/files/6799183/attributes_in_queries.zip)



Example comparison from ARS dataset can be seen as 

![ARS_example](https://user-images.githubusercontent.com/2372136/125176190-35671400-e1da-11eb-9243-128a4fe4a4b5.png)

Example comparison from RAD dataset can be seen as

![RAD_example](https://user-images.githubusercontent.com/2372136/125176191-36984100-e1da-11eb-8788-4c309c2d2c27.png)

Video List Used in the Paper from RAD Dataset

![RAD_selected_videos](https://user-images.githubusercontent.com/2372136/125244116-9a645c00-e2f7-11eb-9753-73a5a6cf17c6.png)




	




## Acknowledgements

This work was supported in part by GEBIP 2018 Award of the Turkish Academy of Sciences to E. Erdem, BAGEP 2021 Award of the Science Academy to A. Erdem.
