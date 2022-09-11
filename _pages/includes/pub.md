# 📄 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2021</div><img src='images/ICML21.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- Motivated by how neuron cells work and collaborate, we present a capsule version equipped with a transmitter and several optimizable receptors, and a capsule works like a neuron cell (i.e., transmitters compress a capsule feauture and send it to the higher level; neurotransmitter-receptor match determines the part-to-whole routing). A new framework oragnizes all capsules to execute an agglomerative hierachical clustering.

- **<span style="color:SeaGreen">On PHL</span>**: This work provides a new framework (works like many parse trees) for effective, effecient, and flexible part-hierarchy parsing.
<!-- The receptors of children capsules are recombined to act as receptors of parent capsules, thus capsules in different layers execute **one** agglomerative hierachical clustering. -->
<!-- iterative clustering algorithm, for flexibly aggregating parts into a whole. However, (i) clustering parts according to high-dimensional feature similarity suffers from "curse of dimension"; (ii) an iterative process hinders to build a model deeper; (iii) feature value similarity cannot be used to find semantically cooperative object parts. We separate a clustering process into severel steps of an agglomerative hierachical clustering, and in each step capsules use its receptors (templates) to select the "right" object parts in a straightforward way.-->
</div>
<div markdown="1">
[A Receptor Skeleton for Capsule Neural Networks](http://proceedings.mlr.press/v139/chen21x/chen21x.pdf) [<span style="color:SeaGreen">PHL</span>, <span style="color:#8866FF;">CV</span>], **Jintai Chen**, Hongyun Yu, Chengde Qian, Danny Z. Chen, Jian Wu$$^*$$, **International Conference on Machine Learning (ICML)**, 2020
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2021</div><img src='images/EP.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- **Academic Impact**: It is the first work to propose the concept of *Electrocardio panorama*, which allows visualizing heartbeat signals (ECG signals) from any viewpoints. Thus, our work benefits (i) Panoramic observations of heartbeat signals; (ii) Unified representation of ECG signals recorded by different systems; (iii) Waveform-aligned Mixup for new ECG case synthesis (e.g., for data augmentation); (iv) Corrupted ECG view reconstruction; (v) ECG theory exploration. <span style="color:red">(PS: got scores 7, 9, 10 of 10 in the IJCAI double-blind review)</span>
- **New Data Annotations**: We provided ECG wave segmentation annotations for Tianchi ECG dataset and PTB dataset.
- **Exposure**: Our work is promoted by more than 20 media and forums, such as [机器之心](https://mp.weixin.qq.com/s/nUOQjLzE7LPCizVAZJtA6Q), [专知](https://www.zhuanzhi.ai/document/2641de7df0eabfe36f40fd30fa33d848), [澎湃](https://www.thepaper.cn/newsDetail_forward_13432066), [AI研习社](https://www.yanxishe.com/reportDetail/27449).
 - **<span style="color:SeaGreen">On PHL</span>**: This work estimates projection functions to align part poses, and it is a simple case of PHL to adopt an encoder-decoder to aggregate parts (heartbeat waveforms represented in ECG signals).
 
<!--  The consensus view of PHL considers to represent object whole by encoding locations and representations of object parts with a general approach. In our case, an ECG view represents partial waves of whole heartbeat signal. It is a simple situation for PHL, because the *location* for recording one ECG view (object part) is pre-given and fixed, while in a more complex situation the location relations between object parts and whole are ambiguous. In the simple setting, the proposed model, a less pure version of PHL, generalizes well on learning whole heartbeat from sparse ECG signals. The pre-given and clear ECG viewpoints (i.e., locations) is the fundament of success in part-whole relation generalization, and the problem with more complicated location information is still open. But, the positive aspect is, the locations of detailed waveforms in one ECG view are complicated (relative to the whole heartbeat information) and well quantized by our model. -->
</div>
<div markdown="1">
[Electrocardio panorama: Synthesizing new ECG views with self-supervision](https://www.ijcai.org/proceedings/2021/0495.pdf)[<span style="color:SeaGreen">PHL</span>, <span style="color:#FC6A03;">DD (Sparse Recon.)</span>, <span style="color:#D70761;">M-AI</span>], **Jintai Chen**$$^+$$, Xiangshang Zheng$$^+$$, Hongyun Yu$$^+$$, Danny Z. Chen, Jian Wu$$^*$$, **International Joint Conference on Artificial Intelligence (IJCAI)**, 2021, [\[**Code and Data**\]](https://github.com/WhatAShot/Electrocardio-Panorama)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2022</div><img src='images/AAAI.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
- This work proposes a principle of "group + abstract" for tabular learning, and presents a series of parse-tree-like model to explore the impacts of model depth for tabular tasks.
- **<span style="color:SeaGreen">On PHL</span>**: Tabular data is naturally property aligned, and it is a suitable scenario to explore how to implant a parse tree into a neural network.
</div>
<div markdown="1">
[DANETs: Deep Abstract Networks for Tabular Data Classification and Regression](https://ojs.aaai.org/index.php/AAAI/article/view/20309/20068) [<span style="color:SeaGreen">PHL</span>, <span style="color:RoyalBlue">DLA-D</span>, <span style="color:#FC6A03;">DD (tabular learning)</span>], **Jintai Chen**, Kuanlun Liao, Yao Wan, Danny Z Chen, Jian Wu, **AAAI**, 2022, [\[**Code**\]](https://github.com/WhatAShot/DANet)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2022</div><img src='images/ME-GAN.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- This work is the follow-up of Electrocardio panorama synthesis and practice the same <span style="color:SeaGreen">PHL</span> insights, and it is also the first GAN to synthesize multi-view ECG signals (part representation) by primarily synthesizing the stereo ECG representation (whole representations).
</div>
<div markdown="1">
[ME-GAN: Learning Panoptic Electrocardio Representations for Multi-view ECG Synthesis Conditioned on Heart Diseases](https://proceedings.mlr.press/v162/chen22n/chen22n.pdf)[<span style="color:RoyalBlue">DLA-D (GAN)</span>, <span style="color:#FC6A03;">DD (Sparse Recon.)</span>, <span style="color:#D70761;">M-AI</span>], **Jintai Chen**$$^+$$, Kuanlun Liao$$^+$$, Kun Wei, Haochao Ying, Danny Z Chen, Jian Wu, **International Conference on Machine Learning (ICML)**, 2022
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2020</div><img src='images/CVPR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- This work provides a new efficient location-aware graph convolution for 3D detection in point cloud, and predicts the 3D object centers by voting from various feature levels. It is also observed that our method is more sensitive than the official manual annotations.
- **<span style="color:SeaGreen">On PHL</span>**: Point cloud is a natural scenario that the object parts and wholes were naturally pose aligned and it is proved to be  to be sufficient to use only **one** scalar feature in the proposed graph convolution for part-whole relation quantization.
</div>
<div markdown="1">
 [A hierarchical graph network for 3D object detection on point clouds](https://openaccess.thecvf.com/content_CVPR_2020/papers/Chen_A_Hierarchical_Graph_Network_for_3D_Object_Detection_on_Point_CVPR_2020_paper.pdf)[<span style="color:#8866FF;">CV (Detection)</span>, <span style="color:#FC6A03;">DD (Point clouds)</span>], **Jintai Chen**, Biwen Lei, Qingyu Song, Haochao Ying, Danny Z Chen, Jian Wu, **IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)**, 2020
</div>
</div>

- [Doctor imitator: A graph-based bone age assessment framework using hand radiographs](https://arxiv.org/pdf/2102.05424.pdf)[<span style="color:SeaGreen">PHL</span>, <span style="color:RoyalBlue">DLA-D</span>, <span style="color:#8866FF;">CV</span>, <span style="color:#FC6A03;">DD (GNN)</span>, <span style="color:#D70761;">M-AI</span>], **Jintai Chen**$$^+$$, Bohan Yu$$^+$$, Biwen Lei$$^+$$, Ruiwei Feng, Danny Z. Chen, and Jian Wu$$^*$$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)**, 2020

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
