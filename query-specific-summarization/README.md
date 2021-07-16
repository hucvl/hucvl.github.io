![](teaserV8.png)

# Paper
Kemal CIZMECILER, Erkut Erdem and Aykut Erdem. "Leveraging Semantic Saliency Maps for Query-Specific Video Summarization ", submitted to Multimedia Tools and Applications.
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
||  **Total**   | **60(unique)**           | **91339**                  | **54:36**            |**142**|  **577**|  |





## How To Download


Attribute list and annotations are provided as as mat file, and ground truth human summaries also provided as *.txt* files. 
[usersummaries_annotations.zip](https://github.com/hucvl/hucvl.github.io/files/6831007/usersummaries_annotations.zip)



Queries in videos are here [attributes_in_queries.zip](https://github.com/hucvl/hucvl.github.io/files/6799183/attributes_in_queries.zip)



Example comparison from ARS dataset can be seen as 

![ARS_example2](https://user-images.githubusercontent.com/2372136/125298681-0b743580-e331-11eb-817b-dddf706f297a.png)


Example comparison from RAD dataset can be seen as

![RAD_example2](https://user-images.githubusercontent.com/2372136/125299081-76257100-e331-11eb-868f-3f6a0873a5aa.png)



Video List Used in the Paper from RAD Dataset



| Sequence Title | Query | Duration  | Number of Frames | Shot Count 
|-------------|-------------|:---------------:|:----------------:|:----------------:|
| 5slean   | lean            | 01:04                  | 1536            |64|   
| basketball fights   | fight              | 03:03                  | 4368            |182|
| bts dance girl group   | dance              | 02:51                  | 4104           |171| 
| bts dance cover   |dance             | 02:48                  | 4032            |168|  
| bus crash   | crash            | 02:00                  |  2880           |120|  
| bus driver beats up girl   | beat            | 01:34                  | 2256          |94|  
| chase bryant   | chase             | 03:14                  | 4656            |194|  
| chase pig commercial   | chase             | 01:46                  | 2544            |106|  
| chase utley slide   | chase             | 01:05                  | 1560            |65|  
| cooking channel   | cook             | 02:13                  | 3192           |133|  
| cooking videos   | cook             | 02:48                  |4032            |168|  
| cooking with dogs   | cook             | 03:00                  | 4320            |180|  
| cooking with kylie   | cook             | 02:12                  | 3168           |132|  
| dance practice dope   | dance             | 02:01                  | 2904            |121|  




	




## Acknowledgements

This work was supported in part by GEBIP 2018 Award of the Turkish Academy of Sciences to E. Erdem, BAGEP 2021 Award of the Science Academy to A. Erdem.
