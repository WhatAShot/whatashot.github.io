# 📄 Selected Publications
<span style="color:RoyalBlue">(*: Equal contribution; $\dagger$: Corresponding author(s))</span>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Nature Communications</div><img src='images/NC.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- **Academic Impact**: Congenital heart disease is the most common category among congenital abnormalities, with an incidence rate approaching 1%. Previously, ECGs were considered to have limited effectiveness in diagnosing congenital heart disease. AI demonstrated the value of ECGs in diagnosing congenital heart disease, which surpasses our previous cognition. While techniques like echocardiography and cardiac MRI are currently utilized for precise diagnosis, the cost-effectiveness and non-invasiveness of ECGs continue to harbor substantial potential for precise large-scale population screening and benefiting low-resourced regions.
<div markdown="1">
Congenital Heart Disease Detection by Pediatric Electrocardiogram Based Deep Learning Integrated with Human Concepts [<span style="color:#D70761;">AI4H</span>] [\[**Code and Data**\]](https://github.com/shuaih720/CHDdECG), 
**Jintai Chen**$^\*$, Shuai Huang$^\*$, Ying Zhang$^\*$, Qing Chang$^\*$, Yixiao Zhang, Dantong Li, Jia Qiu, LiantingHu, Xiaoting Peng, Yunmei Du, Yunfei Gao, Danny Z. Chen, Abdelouahab Bellou$^\dagger$, Jian Wu$^\dagger$, Huiying Liang$^\dagger$,
**Nature Communications**, 2024
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2021</div><img src='images/EP.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- **Academic Impact**: It is the first work to propose the concept of *Electrocardio panorama*, which allows visualizing heartbeat signals (ECG signals) from any viewpoints. Thus, our work benefits (i) Panoramic observations of heartbeat signals; (ii) Unified representation of ECG signals recorded by different systems; (iii) Waveform-aligned Mixup for new ECG case synthesis (e.g., for data augmentation); (iv) Corrupted ECG view reconstruction; (v) ECG theory exploration. 
<!--  <span style="color:red">(PS: got scores 7, 9, 10 of 10 in the IJCAI double-blind review)</span> -->
- **New Data Annotations**: We provided ECG wave segmentation annotations for Tianchi ECG dataset and PTB dataset.
- **Exposure**: Our work is promoted by more than 20 media and forums, such as [机器之心](https://mp.weixin.qq.com/s/nUOQjLzE7LPCizVAZJtA6Q), [专知](https://www.zhuanzhi.ai/document/2641de7df0eabfe36f40fd30fa33d848), [澎湃](https://www.thepaper.cn/newsDetail_forward_13432066), [AI研习社](https://www.yanxishe.com/reportDetail/27449).
</div>
<div markdown="1">
[Electrocardio panorama: Synthesizing new ECG views with self-supervision](https://www.ijcai.org/proceedings/2021/0495.pdf) [<span style="color:#D70761;">AI4H</span>] [\[**Code and Data**\]](https://github.com/WhatAShot/Electrocardio-Panorama), 
**Jintai Chen**$^\*$, Xiangshang Zheng$^\*$, Hongyun Yu$^\*$, Danny Z. Chen, Jian Wu$^\dagger$,
**International Joint Conference on Artificial Intelligence (IJCAI)**, 2021
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2021</div><img src='images/ICML21.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
Armed with a trainable prototype tree, we introduce a capsule network that orchestrates all capsules to perform hierarchical clustering for image semantics in object recognition. These prototypes act as cluster centroids, enabling the capsule network to proficiently conduct part-to-whole hierarchy interpretation in object recognition, thereby revealing object category relations and semantic hierarchy without any prior information. 
<!-- - **<span style="color:SeaGreen">On SRL</span>**: This work provides a new framework (works like many parse trees) for effective, effecient, and flexible . -->
</div>
<div markdown="1">
[A receptor skeleton for capsule neural networks](http://proceedings.mlr.press/v139/chen21x/chen21x.pdf) [<span style="color:SeaGreen">SRL (prototype tree structure)</span>, <span style="color:RoyalBlue">CV</span>], **Jintai Chen**, Hongyun Yu, Chengde Qian, Danny Z. Chen, Jian Wu$^\dagger$, **International Conference on Machine Learning (ICML)**, 2021
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2023 Oral</div><img src='images/T2G.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
This study represents a Transformer-based evolution, a continuation of DANETs. It focuses on extracting underlying feature relation graphs and presenting feature interactions. By leveraging this acquired graph topology, T2G-Former demonstrates robust performance while offering a clear and coherent explanation of feature relations.
<!-- - **<span style="color:SeaGreen">On SRL</span>**: Tabular data is naturally property aligned, and it is a suitable scenario to explore how to implant a parse tree into a neural network. -->
</div>
<div markdown="1">
[T2G-Former: Organizing tabular features into relation graphs promotes heterogeneous feature interaction](https://arxiv.org/pdf/2211.16887.pdf) [<span style="color:SeaGreen">SRL (graph structure)</span>, <span style="color:#FC6A03;">TD</span>] [\[**Code**\]](https://github.com/jyansir/t2g-former), Jiahuan Yan$^\*$, **Jintai Chen**$^\*$, Yixuan Wu, Danny Ziyi Chen, Jian Wu$^\dagger$, **AAAI Association for the Advancement of Artificial Intelligence (AAAI, Oral)**, 2023
</div>
</div>

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2022</div><img src='images/ME-GAN.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- This work is the follow-up of Electrocardio panorama synthesis and practice the same <span style="color:SeaGreen">SRL</span> insights, and it is also the first GAN to synthesize multi-view ECG signals (part representation) by primarily synthesizing the stereo ECG representation (whole representations).
</div>
<div markdown="1">
[ME-GAN: Learning Panoptic Electrocardio Representations for Multi-view ECG Synthesis Conditioned on Heart Diseases](https://proceedings.mlr.press/v162/chen22n/chen22n.pdf) [<span style="color:SeaGreen">SRL (part-whole hierarchy learning)</span>, <span style="color:#D70761;">AI4H</span>], **Jintai Chen**$^\*$, Kuanlun Liao$^\*$, Kun Wei, Haochao Ying$^\dagger$, Danny Z Chen, Jian Wu, **International Conference on Machine Learning (ICML)**, 2022
</div>
</div> -->

<!--
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2020</div><img src='images/CVPR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- This work provides a new efficient location-aware graph convolution for 3D detection in point cloud, and predicts the 3D object centers by voting from various feature levels. It is also observed that our method is more sensitive than the official manual annotations.
- **<span style="color:SeaGreen">On SRL</span>**: Point cloud is a natural scenario that the object parts and wholes were naturally pose aligned and it is proved to be  to be sufficient to use only **one** scalar feature in the proposed graph convolution for part-whole relation quantization.
</div>
<div markdown="1">
 [A hierarchical graph network for 3D object detection on point clouds](https://openaccess.thecvf.com/content_CVPR_2020/papers/Chen_A_Hierarchical_Graph_Network_for_3D_Object_Detection_on_Point_CVPR_2020_paper.pdf) [, <span style="color:RoyalBlue">CV</span>], **Jintai Chen**$^\*$, Biwen Lei$^\*$, Qingyu Song$^\*$, Haochao Ying, Danny Z Chen, Jian Wu$^\dagger$, **IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**, 2020
</div>
</div>
-->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MICCAI 2020 Oral</div><img src='images/baa.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

This study converts unstructured hand radiography images into a structured format, represented as tables, based on clinical prior information (the clinical TW3 approach). Subsequently, a GNN is crafted to process the tabular data and achieves impressive and interpretable bone age assessment. It is worth noting that many medical images are semi-structured data, and this paper unveils an potentially interpretable and efficient semi-structured data processing approach.

</div>
<div markdown="1">
 [Doctor imitator: Hand-radiography-based bone age assessment by imitating scoring methods](https://arxiv.org/pdf/2102.05424.pdf) [<span style="color:SeaGreen">SRL (table structure)</span>, <span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], **Jintai Chen**, Bohan Yu, Biwen Lei, Ruiwei Feng, Danny Z. Chen, and Jian Wu$^\dagger$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI, Oral)**, 2020
</div>
</div>

- [Text2Tree: Aligning Text Representation to the Label Tree Hierarchy for Imbalanced Medical Classification](https://arxiv.org/pdf/2311.16650.pdf) [<span style="color:SeaGreen">SRL (medical code structure)</span>, <span style="color:#D70761;">AI4H</span>] [\[**Code**\]](https://github.com/jyansir/Text2Tree), Jiahuan Yan, Haojun Gao, Zhang Kai, Weize Liu, Danny Chen, Jian Wu$^\dagger$, **Jintai Chen**$^\dagger$, **Findings of Empirical Methods in Natural Language Processing (EMNLP-Findings)**, 2023

- [GCL: Gradient-Guided Contrastive Learning for Medical Image Segmentation with Multi-Perspective Meta Labels](https://arxiv.org/pdf/2309.08888.pdf) [<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], Yixuan Wu, **Jintai Chen**$^\dagger$, Jiahuan Yan, Yiheng Zhu, Danny Chen, Jian Wu$^\dagger$, **ACM International Conference on Multimedia**, 2023

- [Ord2Seq: Regarding Ordinal Regression as Label Sequence Prediction](https://arxiv.org/pdf/2307.09004.pdf) [<span style="color:SeaGreen">SRL (label tree structure)</span>,<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>] [\[**Code**\]](https://github.com/wjh892521292/Ord2Seq), Jinhong Wang$^\*$, Yi Cheng$^\*$, **Jintai Chen**$^\dagger$, Tingting Chen, Danny Chen, Jian Wu$^\dagger$, **IEEE/CVF International Conference
on Computer Vision (ICCV)**, 2023

- [TabCaps: A capsule neural network for tabular data classification with BoW Routing](https://openreview.net/pdf?id=OgbtSLESnI) [<span style="color:SeaGreen">SRL (prototype tree structure)</span>, <span style="color:#FC6A03;">TD</span>] [\[**Code**\]](https://github.com/WhatAShot/TabCaps), **Jintai Chen**, Kuanlun Liao, Yanwen Fang, Danny Ziyi Chen, Jian Wu$^\dagger$, **International Conference on Learning Representations (ICLR)**, 2023

- [Cross-layer retrospective retrieving via layer attention](https://openreview.net/pdf?id=pvgEL1yS3Ql) [<span style="color:RoyalBlue">CV</span>], Yanwen Fang, Yuxi Cai, **Jintai Chen**, Jingyu Zhao, Guangjian Tian, Guodong Li$^\dagger$, **International Conference on Learning Representations (ICLR)**, 2023

- [EXCELFORMER: A neural network surpassing GBDTs on tabular data](https://arxiv.org/pdf/2301.02819.pdf) [<span style="color:#FC6A03;">TD</span>], **Jintai Chen**$^\*$, Jiahuan Yan$^\*$, Danny Ziyi Chen, Jian Wu$^\dagger$, **Preprint, Underreview**.

- [ME-GAN: Learning panoptic electrocardio representations for multi-view ECG synthesis conditioned on heart diseases](https://proceedings.mlr.press/v162/chen22n/chen22n.pdf) [<span style="color:#D70761;">AI4H</span>], **Jintai Chen**$^\*$, Kuanlun Liao$^\*$, Kun Wei, Haochao Ying$^\dagger$, Danny Z Chen, Jian Wu, **International Conference on Machine Learning (ICML)**, 2022

- [DANETs: Deep abstract networks for tabular data classification and regression](https://arxiv.org/pdf/2112.02962.pdf) [<span style="color:SeaGreen">SRL (graph structure)</span>, <span style="color:#FC6A03;">TD</span>] [\[**Code**\]](https://github.com/WhatAShot/DANet), **Jintai Chen**, Kuanlun Liao, Yao Wan, Danny Ziyi Chen, Jian Wu$^\dagger$, **AAAI Association for the Advancement of Artificial Intelligence (AAAI)**, 2022

- [Robust training of graph neural networks via noise governance](https://arxiv.org/pdf/2211.06614.pdf) [<span style="color:SeaGreen">SRL (graph structure)</span>], Siyi Qian, Haochao Ying$^\dagger$, Renjun Hu, Jingbo Zhou, **Jintai Chen**, Danny Z Chen, Jian Wu$^\dagger$, **ACM International Conference on Web Search and Data Mining (WSDM)**, 2023

- [Self-learning and one-shot learning based single-slice annotation for 3D medical image segmentation](https://link.springer.com/content/pdf/10.1007/978-3-031-16452-1_24.pdf) [<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], Yixuan Wu, Bo Zheng, **Jintai Chen**, Danny Z Chen, Jian Wu$^\dagger$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI, Oral)**, 2022

- [D-Former: A U-shaped dilated Transformer for 3D medical image segmentation](https://arxiv.org/pdf/2201.00462.pdf) [<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], Yixuan Wu, Kuanlun Liao, **Jintai Chen**, Danny Z Chen, Jinhong Wang, Honghao Gao, Jian Wu$^\dagger$, **Neural Computing and Applications**, 2022

- [Identifying electrocardiogram abnormalities using a handcrafted-rule-enhanced neural network](https://arxiv.org/pdf/2206.10592.pdf) [<span style="color:#D70761;">AI4H</span>], Yuexin Bian, **Jintai Chen**, Xiaojun Chen, Xiaoxian Yang, Danny Z. Chen, Jian Wu$^\dagger$, **IEEE/ACM Transactions on Computational Biology and Bioinformatics (TCBB)**, 2022.

- [A corresponding region fusion framework for multi-modal cervical lesion detection](https://ieeexplore.ieee.org/abstract/document/9784879) [<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], Tingting Chen, Wenhao Zheng, Heping Hu, Chunhua Luo, **Jintai Chen**, Chunnv Yuan, Weiguo Lu, Danny Z Chen, Honghao Gao, Jian Wu$^\dagger$, **IEEE/ACM Transactions on Computational Biology and Bioinformatics (TCBB)**, 2022

- [ChroNet: A multi-task learning based approach for prediction of multiple chronic diseases](https://link.springer.com/article/10.1007/s11042-020-10482-8) [<span style="color:#FC6A03;">TD</span>, <span style="color:#D70761;">AI4H</span>], Ruiwei Feng, Yan Cao, Xuechen Liu, Tingting Chen, **Jintai Chen**, Danny Z Chen, Honghao Gao, Jian Wu$^\dagger$, **Multimedia Tools and Applications**, 2021

- [A semi-supervised deep convolutional framework for signet ring cell detection](https://www.sciencedirect.com/science/article/pii/S0925231221000941) [<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>] [\[**Code**\]](https://github.com/ooooverflow/DigestPath2019), Haochao Ying, Qingyu Song, **Jintai Chen**, Tingting Liang, Jingjing Gu, Fuzhen Zhuang, Danny Z Chen, Jian Wu$^\dagger$, **Neurocomputing**, 2021

- [Interactive few-shot learning: Limited supervision, better medical image segmentation](https://ieeexplore.ieee.org/abstract/document/9358206) [<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], Ruiwei Feng$^\*$, Xiangshang Zheng$^\*$, Tianxiang Gao$^\*$, **Jintai Chen**, Wenzhe Wang, Danny Z Chen, Jian Wu$^\dagger$, **IEEE Transactions on Medical Imaging (TMI)**, 2021

- [A transfer learning based super-resolution microscopy for biopsy slice images: the joint methods perspective](https://ieeexplore.ieee.org/abstract/document/9082112) [<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], **Jintai Chen**$^\*$, Haochao Ying$^\*$, Xuechen Liu$^\*$, Jingjing Gu, Ruiwei Feng, Tingting Chen, Honghao Gao$^\dagger$, Jian Wu$^\dagger$, **IEEE/ACM Transactions on Computational Biology and Bioinformatics (TCBB)**, 2020

- [A hierarchical graph network for 3D object detection on point clouds](https://openaccess.thecvf.com/content_CVPR_2020/papers/Chen_A_Hierarchical_Graph_Network_for_3D_Object_Detection_on_Point_CVPR_2020_paper.pdf) [<span style="color:RoyalBlue">CV</span>], **Jintai Chen**$^\*$, Biwen Lei$^\*$, Qingyu Song$^\*$, Haochao Ying, Danny Z Chen, Jian Wu$^\dagger$, **IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**, 2020

- [Flow-Mixup: Classifying multi-labeled medical images with corrupted labels](https://arxiv.org/pdf/2102.08148.pdf) [<span style="color:RoyalBlue">CV</span>], **Jintai Chen**, Hongyun Yu, Ruiwei Feng, Danny Z Chen, Jian Wu$^\dagger$, **International Conference on Bioinformatics and Biomedicine (BIBM)**, 2020

<!-- - [Doctor Imitator: Hand-Radiography-based Bone Age Assessment by Imitating Scoring Methods](https://arxiv.org/pdf/2102.05424.pdf) [<span style="color:SeaGreen">SRL(Neural Additive model)</span>, <span style="color:RoyalBlue">DLA-D</span>, <span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], **Jintai Chen**, Bohan Yu, Biwen Lei, Ruiwei Feng, Danny Z. Chen, and Jian Wu, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)**, 2020 -->

- [A deep learning approach for colonoscopy pathology WSI analysis: Accurate segmentation and classification](https://ieeexplore.ieee.org/abstract/document/9269406) [<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], Ruiwei Feng, Xuechen Liu, **Jintai Chen**, Danny Z Chen, Honghao Gao, Jian Wu$^\dagger$, **IEEE Journal of Biomedical and Health Informatics (J-BHI)**, 2020

- [A fully 3D cascaded framework for pancreas segmentation](https://ieeexplore.ieee.org/abstract/document/9098473) [<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], Wenzhe Wang, Qingyu Song, Ruiwei Feng, Tingting Chen, **Jintai Chen**, Danny Z Chen, Jian Wu$^\dagger$, **International Symposium on Biomedical Imaging (ISBI)**, 2020

- [SSN: A stair-shape network for real-time polyp segmentation in colonoscopy images](https://ieeexplore.ieee.org/abstract/document/9098492) [<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], Ruiwei Feng, Biwen Lei, Wenzhe Wang, Tingting Chen, **Jintai Chen**, Danny Z Chen, Jian Wu$^\dagger$, **International Symposium on Biomedical Imaging (ISBI)**, 2020

- [LSRC: A long-short range context-fusing framework for automatic 3D vertebra localization](https://link.springer.com/content/pdf/10.1007/978-3-030-32226-7_11.pdf) [<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], **Jintai Chen**$^\*$, Yanjie Wang$^\*$, Ruoqian Guo$^\*$, Bohan Yu, Tingting Chen, Wenzhe Wang, Ruiwei Feng, Danny Z Chen, Jian Wu$^\dagger$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)**, 2019

- [Multi-view learning with feature level fusion for cervical dysplasia diagnosis](https://link.springer.com/content/pdf/10.1007/978-3-030-32239-7_37.pdf) [<span style="color:RoyalBlue">CV</span>, <span style="color:#D70761;">AI4H</span>], Tingting Chen, Xinjun Ma, Xuechen Liu, Wenzhe Wang, Ruiwei Feng, **Jintai Chen**, Chunnv Yuan, Weiguo Lu, Danny Z Chen, Jian Wu$^\dagger$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)**, 2019
