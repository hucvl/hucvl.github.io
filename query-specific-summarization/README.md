![](teaserV8.png)

# Paper
Kemal CIZMECILER, Erkut Erdem and Aykut Erdem. "Leveraging Semantic Saliency Maps for Query-Specific Video Summarization ", Multimedia Tools and Applications, to appear.
[pdf](https://vision.cs.hacettepe.edu.tr/publication/fulltext/?.pdf)

# ARS DATASET
This dataset contains video sets collected from publicly available Youtube videos. 

we focus on crowd videos as they can be annotated with a rich set of attributes about the observed activities, actors and events. Here we use complex query terms such as ‘fight between fans’ and ‘running and swimming’. In total, we collected 10 videos, including music and movie clips with 720 × 1280 resolution. The duration of the videos changes
between 2-12 minutes. More specifically, there is a video log about a triathlon race, which contains running, swimming and biking activities. There exist 3 music videos, mainly showing cheering fans in stadiums or streets. There are 3 movie clips, which respectively show a battlefield scene with a ceremony in a church, dancers in a car and in a club, and finally an orchestra band on a stage with full of dancing people in front of them. Lastly, there is a rock festival video, which contains singing, resting on a beach and playing activities.

![](population-densities.png)

There are totally 132K images collected from 323 users and 1.5K photo albums. The meta-data of photos such as geolocation, textual tags and timestamp are also available.

| City Albums | Number of Users | Number of Photo Sets | Number of Photos | Number of Unique Words
|-------------|:---------------:|:--------------------:|:----------------:|:----------------:|
| Amsterdam   | 39              | 100                  | 9923             |1460|
| Istanbul    | 58              | 167                  | 13645            |979|
| New York    | 54              | 428                  | 30443            |18538|
| Paris       | 39              | 178                  | 21819            |1521|
| Tokyo       | 71              | 514                  | 36787            |4007|
| Venice      | 62              | 179                  | 19729            |2032|
| **Total**   | **323**         | **1566**             | **132346**       |**25118**|

For each city, textual data extracted from the photos' meta-data - which are tags and title - is also provided in terms of a word vocabulary and it's inverse-document frequencies. Additionally number of tags for each photo together with their term frequencies are also provided.

### Word Clouds of the Vocabularies from Cities of YFCC100M-CITIES Dataset

|![](wordcloud_amsterdam.png)|![](wordcloud_istanbul.png)|![](wordcloud_newyork.png)|
|:---:|:---:|:---:|
|Amsterdam                    |  Istanbul | New York|

![](wordcloud_paris.png)|![](wordcloud_tokyo.png)|![](wordcloud_venice.png)|
|:---:|:---:|:---:|
|  Paris |Tokyo                    |  Venice |

## How To Download

You can download the csv files containing the urls and meta-data of individual photos, word vocabulary and corresponding tf-idf values [here](./yfcmmf00m-cities.zip). Each csv file contains urls and meta-data of an individual user's photo collection from that specific city. The urls can be used to download photos from Flickr.

# Summarization Photo Set
This dataset contains photo sets collected from Flickr. Different from the YFCC100M-CITIES dataset, the photos are fetched directly from Flickr, on a ranged timescale and each city from a different individual user.

There are 100 photos from 6 different cities namely Amsterdam, Istanbul, New York, Paris, Tokyo and Venice which are among the most visited cities around the world. These sets contain photos different than YFCC100M-CITIES.

| City Albums | Number of Photos |
|-------------|:----------------:|
| Amsterdam   | 100              |
| Istanbul    | 100              |
| New York    | 100              |
| Paris       | 100              |
| Tokyo       | 100              |
| Venice      | 100              |
| **Total**   | **600**          |

|![](Summarization_Amsterdam.jpg)|![](Summarization_Istanbul.jpg)|
|:---:|:---:|
|Amsterdam                    |  Istanbul |

|![](Summarization_Newyork.jpg)|![](Summarization_Paris.jpg)|
|:---:|:---:|
|New York                    |  Paris |

|![](Summarization_Tokyo.jpg)|![](Summarization_Venice.jpg)|
|:---:|:---:|
|Tokyo                    |  Venice |

Ground truth human summaries are also provided as *.mat* files. Each album is annotated with 20 different human generated summaries. For every album, photos are shown to the users and let them select 10 most representative images.

## How To Download

You can download the json files containing the urls and meta-data of individual photos [here](./summary-set.zip). The urls can be used to download photos from Flickr.

## Acknowledgements

This work was supported in part by TUBA GEBIP fellowship awarded to E. Erdem and by The Scientific and Technological Research Council of Turkey (TUBITAK) Primary Subjects R&D Funding Program Award No. 116E685.
