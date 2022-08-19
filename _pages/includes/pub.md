# 📄 Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2021</div><img src='images/ICML21.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- **<span style="color:SeaGreen">Insights of GLOM</span>**: This work provides **a new GLOM approach**. Previous routing executes clustering by iteractive process, for flexibly aggregating parts into a whole. However, (i) clustering parts according to high-dimensional feature similarity suffers from "curse of dimension"; (ii) an iterative process hinders to build a model deeper; (iii) feature value similarity cannot be used to find semantically cooperative object parts. We separate a clustering process into severel steps of an agglomerative hierachical clustering, and in each step capsules use its receptors (templates) to select the "right" object parts in a straightforward way. We gave an important constraint that the receptors of children capsules are recombined to act as receptors of parent capsules, thus capsules in different layers execute **one** agglomerative hierachical clustering.
</div>
<div markdown="1">
[A Receptor Skeleton for Capsule Neural Networks](http://proceedings.mlr.press/v139/chen21x/chen21x.pdf)[<span style="color:SeaGreen">GLOM</span>, <span style="color:#8866FF;">CV</span>], **Jintai Chen**, Hongyun Yu, Chengde Qian, Danny Z. Chen, Jian Wu$$^*$$, **International Conference on Machine Learning (ICML)**, 2020

- Motivated by how neuron cells work and collaborate, the proposed new capsule structure is equipped with a transmitter and several optimizable receptors, and a capsule works like a neuron cell (i.e., transmitters compress a capsule feauture (an object part) and send the compressed feature to the higher level; receptors of higher-level capsules semantically match the "right" object parts). The novel skeleton oragnizes all capsules, like a nervous system, to execute an agglomerative hierachical clustering, without iteractive process.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2021</div><img src='images/EP.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- **<span style="color:SeaGreen">Insights of GLOM</span>**: The consensus view of GLOM considers to represent object whole by encoding locations and representations of object parts with a general approach. In our case, an ECG view represents partial waves of whole heartbeat signal. It is a simple situation for GLOM, because the *location* for recording one ECG view (object part) is pre-given and fixed, while in a more complex situation the location relations between object parts and whole are ambiguous. In the simple setting, the proposed model, a less pure version of GLOM, generalizes well on learning whole heartbeat from sparse ECG signals. The pre-given and clear ECG viewpoints (i.e., locations) is the fundament of success in part-whole relation generalization, and the problem with more complicated location information is still open. But, the positive aspect is, the locations of detailed waveforms in one ECG view are complicated (relative to the whole heartbeat information) and well quantized by our model.
</div>
<div markdown="1">
[Electrocardio panorama: Synthesizing new ECG views with self-supervision](https://www.ijcai.org/proceedings/2021/0495.pdf)[<span style="color:SeaGreen">GLOM</span>, <span style="color:#FC6A03;">DD (Sparse Recon.)</span>, <span style="color:#D70761;">M-AI</span>], **Jintai Chen**$$^+$$, Xiangshang Zheng$$^+$$, Hongyun Yu$$^+$$, Danny Z. Chen, Jian Wu$$^*$$, **International Joint Conference on Artificial Intelligence (IJCAI)**, 2021, [\[**Code and Data**\]](https://github.com/WhatAShot/Electrocardio-Panorama)

- **Academic Impact**: It is the first work that raises the concept of *Electrocardio panorama*, which allows visualizing heartbeat signals (ECG signals) from any viewpoints. Thus, our work benefits (i) Panoramic observations of heartbeat signals; (ii) Transformation among different ECG recording systems; (iii) Waveform-aligned Mixup on ECG signals for data augmentation; (iv) New multi-view ECG signal synthesis from scratch; (v) Corrupted ECG view reconstruction. <span style="color:red">(PS: this paper got scores 7, 9, 10 of 10 in the IJCAI double-blind review)</span>
- **New Data Annotations**: We provided ECG wave segmentation annotations for Tianchi ECG dataset and PTB dataset.
- **Exposure**: Our work is promoted by more than 20 media and forums, such as [机器之心](https://mp.weixin.qq.com/s/nUOQjLzE7LPCizVAZJtA6Q), [专知](https://www.zhuanzhi.ai/document/2641de7df0eabfe36f40fd30fa33d848), [澎湃](https://www.thepaper.cn/newsDetail_forward_13432066), [AI研习社](https://www.yanxishe.com/reportDetail/27449).
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2022</div><img src='images/ME-GAN.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[ME-GAN: Learning Panoptic Electrocardio Representations for Multi-view ECG Synthesis Conditioned on Heart Diseases](https://proceedings.mlr.press/v162/chen22n/chen22n.pdf)[<span style="color:SeaGreen">GLOM</span>, <span style="color:RoyalBlue">DLA-D (GAN)</span>, <span style="color:#FC6A03;">DD (Sparse Recon.)</span>, <span style="color:#D70761;">M-AI</span>], **Jintai Chen**$$^+$$, Kuanlun Liao$$^+$$, Kun Wei, Haochao Ying, Danny Z Chen, Jian Wu, **International Conference on Machine Learning (ICML)**, 2022

- This work is the follow-up of Nef-Net and follows the same <span style="color:SeaGreen">GLOM insight</span>, and is the first GAN to synthesize multi-view ECG signals by primarily synthesizing the stereo ECG representation.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2020</div><img src='images/CVPR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- This work provides a FCN backbone with a kind of new efficient location-aware graph convolution for 3D detection in point cloud, and predicts the 3D object centers by voting from hierarchical feature levels. It is also observed that our method is more sensitive than the official manual annotations.
- **<span style="color:SeaGreen">Insights of GLOM</span>**: Point cloud is a natural scenario to explore part-whole relation modeling. The point-wise MLP (in PointNet++) for point features agglomeration neglected the detailed location information, and we quantize the location information using only **one** scalar feature in the proposed graph convolution and obtain the performance gain over 1% mAP.
</div>
<div markdown="1">
 [A hierarchical graph network for 3D object detection on point clouds](https://openaccess.thecvf.com/content_CVPR_2020/papers/Chen_A_Hierarchical_Graph_Network_for_3D_Object_Detection_on_Point_CVPR_2020_paper.pdf)[<span style="color:SeaGreen">GLOM</span>, <span style="color:#8866FF;">CV (Detection)</span>, <span style="color:#FC6A03;">DD (Point clouds)</span>], **Jintai Chen**, Biwen Lei, Qingyu Song, Haochao Ying, Danny Z Chen, Jian Wu, **IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**, 2020
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2022</div><img src='images/AAAI.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[DANETs: Deep Abstract Networks for Tabular Data Classification and Regression](https://ojs.aaai.org/index.php/AAAI/article/view/20309/20068)[<span style="color:RoyalBlue">DLA-D</span>, <span style="color:#FC6A03;">DD (tabular learning)</span>], **Jintai Chen**, Kuanlun Liao, Yao Wan, Danny Z Chen, Jian Wu, **AAAI**, 2022, [\[**Code**\]](https://github.com/WhatAShot/DANet)

- This work raises a principle "group + abstract" for tabular learning, and explores the impacts of model depth for tabular data processing.
- **<span style="color:SeaGreen">Insights of GLOM</span>**: Tabular data is naturally discrete, and we seek for the semantic aggregation path from part to whole by an optimizable feature grouping approach. Tabular data is independent to the *position* information.
</div>
</div>

- [Doctor imitator: A graph-based bone age assessment framework using hand radiographs](https://arxiv.org/pdf/2102.05424.pdf)[<span style="color:SeaGreen">GLOM</span>, <span style="color:RoyalBlue">DLA-D</span>, <span style="color:#8866FF;">CV</span>, <span style="color:#FC6A03;">DD (GNN)</span>, <span style="color:#D70761;">M-AI</span>], **Jintai Chen**$$^+$$, Bohan Yu$$^+$$, Biwen Lei$$^+$$, Ruiwei Feng, Danny Z. Chen, and Jian Wu$$^*$$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)**, 2020

- Self-learning and One-shot Learning based Single-slice Annotation for 3D Medical Image Segmentation[<span style="color:#8866FF;">CV (Segmentation)</span>, <span style="color:#D70761;">M-AI</span>], Yixuan Wu, Bo Zheng, **Jintai Chen**, Danny Z Chen, Jian Wu$$^*$$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)**, 2022

- [D-Former: A U-shaped Dilated Transformer for 3D Medical Image Segmentation](https://arxiv.org/pdf/2201.00462.pdf)[<span style="color:#8866FF;">CV (Segmentation)</span>, <span style="color:#D70761;">M-AI</span>], Yixuan Wu, Kuanlun Liao, **Jintai Chen**, Danny Z Chen, Jinhong Wang, Honghao Gao$$^*$$, Jian Wu$$^*$$.

- [Identifying Electrocardiogram Abnormalities Using a Handcrafted-Rule-Enhanced Neural Network](https://arxiv.org/pdf/2206.10592.pdf)[<span style="color:#D70761;">M-AI</span>], Yuexin Bian, **Jintai Chen**, Xiaojun Chen, Xiaoxian Yang$$^*$$, Danny Z. Chen, Jian Wu$$^*$$, **IEEE/ACM Transactions on Computational Biology and Bioinformatics (TCBB)**, 2022.

- [A Corresponding Region Fusion Framework for Multi-modal Cervical Lesion Detection](https://ieeexplore.ieee.org/abstract/document/9784879)[<span style="color:#8866FF;">CV (Detection)</span>, <span style="color:#FC6A03;">DD</span>, <span style="color:#D70761;">M-AI</span>], Tingting Chen, Wenhao Zheng, Heping Hu, Chunhua Luo, **Jintai Chen**, Chunnv Yuan, Weiguo Lu, Danny Z Chen, Honghao Gao, Jian Wu$$^*$$, **IEEE/ACM Transactions on Computational Biology and Bioinformatics (TCBB)**, 2022

- [ChroNet: A multi-task learning based approach for prediction of multiple chronic diseases](https://link.springer.com/article/10.1007/s11042-020-10482-8)[<span style="color:#FC6A03;">DD</span>, <span style="color:#D70761;">M-AI</span>], Ruiwei Feng, Yan Cao, Xuechen Liu, Tingting Chen, **Jintai Chen**, Danny Z Chen, Honghao Gao$$^*$$, Jian Wu, **Multimedia Tools and Applications**, 2021

- [A semi-supervised deep convolutional framework for signet ring cell detection](https://www.sciencedirect.com/science/article/pii/S0925231221000941)[<span style="color:#8866FF;">CV (Detection)</span>, <span style="color:#D70761;">M-AI</span>], Haochao Ying, Qingyu Song, **Jintai Chen**, Tingting Liang, Jingjing Gu, Fuzhen Zhuang, Danny Z Chen, Jian Wu$$^*$$, **Neurocomputing**, 2021, [\[**Code**\]](https://github.com/ooooverflow/DigestPath2019)

- [Interactive few-shot learning: Limited supervision, better medical image segmentation](https://ieeexplore.ieee.org/abstract/document/9358206)[<span style="color:#8866FF;">CV (Segmentation)</span>, <span style="color:#D70761;">M-AI</span>], Ruiwei Feng, Xiangshang Zheng, Tianxiang Gao, **Jintai Chen**, Wenzhe Wang, Danny Z Chen, Jian Wu$$^*$$, **IEEE Transactions on Medical Imaging (TMI)**, 2021

- [A transfer learning based super-resolution microscopy for biopsy slice images: the joint methods perspective](https://ieeexplore.ieee.org/abstract/document/9082112)[<span style="color:#8866FF;">CV (Distant Domain Transfer Learning)</span>, <span style="color:#D70761;">M-AI</span>], **Jintai Chen**, Haochao Ying, Xuechen Liu, Jingjing Gu, Ruiwei Feng, Tingting Chen, Honghao Gao, Jian Wu$$^*$$, **IEEE/ACM Transactions on Computational Biology and Bioinformatics (TCBB)**, 2020

- [Flow-Mixup: Classifying multi-labeled medical images with corrupted labels](https://arxiv.org/pdf/2102.08148.pdf)[<span style="color:RoyalBlue">DLA-D</span>, <span style="color:#8866FF;">CV (Classification)</span>], **Jintai Chen**, Hongyun Yu, Ruiwei Feng, Danny Z Chen, Jian Wu$$^*$$, **International Conference on Bioinformatics and Biomedicine (BIBM)**, 2020

- [A deep learning approach for colonoscopy pathology WSI analysis: Accurate segmentation and classification](https://ieeexplore.ieee.org/abstract/document/9269406)[<span style="color:#8866FF;">CV (Segmentation, Classification)</span>, <span style="color:#D70761;">M-AI</span>], Ruiwei Feng, Xuechen Liu, **Jintai Chen**, Danny Z Chen, Honghao Gao, Jian Wu$$^+$$, 2020

- [A fully 3D cascaded framework for pancreas segmentation](https://ieeexplore.ieee.org/abstract/document/9098473)[<span style="color:#8866FF;">CV (Segmentation)</span>, <span style="color:#D70761;">M-AI</span>], Wenzhe Wang, Qingyu Song, Ruiwei Feng, Tingting Chen, **Jintai Chen**, Danny Z Chen, Jian Wu$$^*$$, **International Symposium on Biomedical Imaging (ISBI)**, 2020

- [SSN: A stair-shape network for real-time polyp segmentation in colonoscopy images](https://ieeexplore.ieee.org/abstract/document/9098492)[<span style="color:#8866FF;">CV (Segmentation)</span>, <span style="color:#D70761;">M-AI</span>], Ruiwei Feng, Biwen Lei, Wenzhe Wang, Tingting Chen, **Jintai Chen**, Danny Z Chen, Jian Wu$$^*$$, **International Symposium on Biomedical Imaging (ISBI)**, 2020

- [LSRC: A long-short range context-fusing framework for automatic 3D vertebra localization](https://link.springer.com/content/pdf/10.1007/978-3-030-32226-7_11.pdf)[<span style="color:#8866FF;">CV (Detection)</span>, <span style="color:#D70761;">M-AI</span>], **Jintai Chen**, Yanjie Wang, Ruoqian Guo, Bohan Yu, Tingting Chen, Wenzhe Wang, Ruiwei Feng, Danny Z Chen, Jian Wu$$^*$$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)**, 2019

- [Multi-view learning with feature level fusion for cervical dysplasia diagnosis](https://link.springer.com/content/pdf/10.1007/978-3-030-32239-7_37.pdf)[<span style="color:#8866FF;">CV</span>, <span style="color:#D70761;">M-AI</span>], Tingting Chen, Xinjun Ma, Xuechen Liu, Wenzhe Wang, Ruiwei Feng, **Jintai Chen**, Chunnv Yuan, Weiguo Lu, Danny Z Chen, Jian Wu$$^*$$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)**, 2019
