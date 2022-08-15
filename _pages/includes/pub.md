# 📄 Publications 
## 🎙 Speech Synthesis


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2019</div><img src='images/fs.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FastSpeech: Fast, Robust and Controllable Text to Speech](https://papers.nips.cc/paper/8580-fastspeech-fast-robust-and-controllable-text-to-speech.pdf) \\
**Yi Ren**, Yangjun Ruan, Xu Tan, Tao Qin, Sheng Zhao, Zhou Zhao, Tie-Yan Liu

[**Project**](https://speechresearch.github.io/fastspeech/) <strong><span class='show_paper_citations' data='4FA6C0AAAAAJ:qjMakFHDy7sC'></span></strong>

- FastSpeech is the first fully parallel end-to-end speech synthesis model.
- **Academic Impact**: This work is included by many famous speech synthesis open-source projects, such as [ESPNet ![](https://img.shields.io/github/stars/espnet/espnet?style=social)](https://github.com/espnet/espnet). Our work are promoted by more than 20 media and forums, such as [机器之心](https://mp.weixin.qq.com/s/UkFadiUBy-Ymn-zhJ95JcQ)、[InfoQ](https://www.infoq.cn/article/tvy7hnin8bjvlm6g0myu).
- **Industry Impact**: FastSpeech has been deployed in [Microsoft Azure TTS service](https://techcommunity.microsoft.com/t5/azure-ai/neural-text-to-speech-extends-support-to-15-more-languages-with/ba-p/1505911) and supports 49 more languages with state-of-the-art AI quality. It was also shown as a text-to-speech system acceleration example in [NVIDIA GTC2020](https://resources.nvidia.com/events/GTC2020s21420).
</div>
</div>


## 💊 AI for Medicine

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2021</div><img src='images/EP.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- **New Data Annotations**: We provided ECG wave segmentation annotations for Tianchi ECG dataset and PTB dataset.
- **Exposure**: Our work are promoted by more than 20 media and forums, such as [机器之心](https://mp.weixin.qq.com/s/nUOQjLzE7LPCizVAZJtA6Q), [专知](https://www.zhuanzhi.ai/document/2641de7df0eabfe36f40fd30fa33d848), [澎湃](https://www.thepaper.cn/newsDetail_forward_13432066), [AI研习社](https://www.yanxishe.com/reportDetail/27449).
- **<span style="color:SeaGreen">GLOM</span> insights**: In the idea of <span style="color:SeaGreen">GLOM</span>, modeling object whole presents a general approach for position auto-encoding and representation learning of object parts. An ECG view illustrates partial ECG waves of whole heartbeat signal. It is a degeneration problem of GLOM, because the *position* for recording one ECG view (object part) is is well defined and relatively simple, while in a standard GLOM problem the definite positional relations between object parts and whole are complex and not given. In this degeneration problem, the proposed model Nef-Net generalizes well on learning the part-whole position relation and representation relation.
</div>
<div markdown="1">
[Electrocardio panorama: Synthesizing new ECG views with self-supervision](https://www.ijcai.org/proceedings/2021/0495.pdf), **Jintai Chen**$$^+$$, Xiangshang Zheng$$^+$$, Hongyun Yu$$^+$$, Danny Z. Chen, Jian Wu$$^*$$, **International Joint Conference on Artificial Intelligence (IJCAI)**, 2021, [\[**Code and Data**\]](https://github.com/WhatAShot/Electrocardio-Panorama)

- **Academic Impact**: It is the first to provide the concept of *Electrocardio panorama*, which allows visualizing the ECG signals from any viewpoints. Thus, our work benefits (i) Panoramic observations of heartbeat signals; (ii) Transformation among different ECG recording systems; (iii) Waveform-aligned Mixup on ECG signals for data augmentation; (iv) New multi-view ECG signal synthesis from scratch.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2022</div><img src='images/ME-GAN.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[ME-GAN: Learning Panoptic Electrocardio Representations for Multi-view ECG Synthesis Conditioned on Heart Diseases](https://proceedings.mlr.press/v162/chen22n/chen22n.pdf) \\
**Jintai Chen**$$^+$$, Kuanlun Liao$$^+$$, Kun Wei, Haochao Ying, Danny Z Chen, Jian Wu, **International Conference on Machine Learning (ICML)**, 2022

- **Academic Impact**: This work is the follow-up of Nef-Net, and is the first GAN to synthesize multi-view ECG signals by primarily synthesizing the stereo ECG representation.
  
</div>
</div>

- [Doctor imitator: A graph-based bone age assessment framework using hand radiographs](https://arxiv.org/pdf/2102.05424.pdf), **Jintai Chen**$$^+$$, Bohan Yu$$^+$$, Biwen Lei$$^+$$, Ruiwei Feng, Danny Z. Chen, and Jian Wu$$^*$$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)**, 2020

- Self-learning and One-shot Learning based Single-slice Annotation for 3D Medical Image Segmentation Yixuan Wu, Bo Zheng, **Jintai Chen**, Danny Z Chen, Jian Wu$$^*$$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)**, 2022

- [D-Former: A U-shaped Dilated Transformer for 3D Medical Image Segmentation](https://arxiv.org/pdf/2201.00462.pdf), Yixuan Wu, Kuanlun Liao, **Jintai Chen**, Danny Z Chen, Jinhong Wang, Honghao Gao$$^*$$, Jian Wu$$^*$$.


- [Identifying Electrocardiogram Abnormalities Using a Handcrafted-Rule-Enhanced Neural Network](https://arxiv.org/pdf/2206.10592.pdf), Yuexin Bian, **Jintai Chen**, Xiaojun Chen, Xiaoxian Yang$$^*$$, Danny Z. Chen, Jian Wu$$^*$$, **IEEE/ACM Transactions on Computational Biology and Bioinformatics (TCBB)**, 2022.

- [A Corresponding Region Fusion Framework for Multi-modal Cervical Lesion Detection](https://ieeexplore.ieee.org/abstract/document/9784879), Tingting Chen, Wenhao Zheng, Heping Hu, Chunhua Luo, **Jintai Chen**, Chunnv Yuan, Weiguo Lu, Danny Z Chen, Honghao Gao, Jian Wu$$^*$$, **IEEE/ACM Transactions on Computational Biology and Bioinformatics (TCBB)**, 2022

- [ChroNet: A multi-task learning based approach for prediction of multiple chronic diseases](https://link.springer.com/article/10.1007/s11042-020-10482-8), Ruiwei Feng, Yan Cao, Xuechen Liu, Tingting Chen, **Jintai Chen**, Danny Z Chen, Honghao Gao$$^*$$, Jian Wu, **Multimedia Tools and Applications**, 2021

- [A semi-supervised deep convolutional framework for signet ring cell detection](https://www.sciencedirect.com/science/article/pii/S0925231221000941), Haochao Ying, Qingyu Song, **Jintai Chen**, Tingting Liang, Jingjing Gu, Fuzhen Zhuang, Danny Z Chen, Jian Wu$$^*$$, **Neurocomputing**, 2021, [\[**Code**\]](https://github.com/ooooverflow/DigestPath2019)

- [Interactive few-shot learning: Limited supervision, better medical image segmentation](https://ieeexplore.ieee.org/abstract/document/9358206), Ruiwei Feng, Xiangshang Zheng, Tianxiang Gao, **Jintai Chen**, Wenzhe Wang, Danny Z Chen, Jian Wu$$^*$$, **IEEE Transactions on Medical Imaging (TMI)**, 2021

- [A transfer learning based super-resolution microscopy for biopsy slice images: the joint methods perspective](https://ieeexplore.ieee.org/abstract/document/9082112), **Jintai Chen**, Haochao Ying, Xuechen Liu, Jingjing Gu, Ruiwei Feng, Tingting Chen, Honghao Gao, Jian Wu$$^*$$, **IEEE/ACM Transactions on Computational Biology and Bioinformatics (TCBB)**, 2020

- [Flow-Mixup: Classifying multi-labeled medical images with corrupted labels](https://arxiv.org/pdf/2102.08148.pdf), **Jintai Chen**, Hongyun Yu, Ruiwei Feng, Danny Z Chen, Jian Wu$$^*$$, **International Conference on Bioinformatics and Biomedicine (BIBM)**, 2020

- [A deep learning approach for colonoscopy pathology WSI analysis: accurate segmentation and classification](https://ieeexplore.ieee.org/abstract/document/9269406), Ruiwei Feng, Xuechen Liu, **Jintai Chen**, Danny Z Chen, Honghao Gao, Jian Wu$$^+$$, 2020

- [A fully 3D cascaded framework for pancreas segmentation](https://ieeexplore.ieee.org/abstract/document/9098473), Wenzhe Wang, Qingyu Song, Ruiwei Feng, Tingting Chen, **Jintai Chen**, Danny Z Chen, Jian Wu$$^*$$, **International Symposium on Biomedical Imaging (ISBI)**, 2020

- [SSN: A stair-shape network for real-time polyp segmentation in colonoscopy images](https://ieeexplore.ieee.org/abstract/document/9098492), Ruiwei Feng, Biwen Lei, Wenzhe Wang, Tingting Chen, **Jintai Chen**, Danny Z Chen, Jian Wu$$^*$$, **International Symposium on Biomedical Imaging (ISBI)**, 2020

- [LSRC: A long-short range context-fusing framework for automatic 3D vertebra localization](https://link.springer.com/content/pdf/10.1007/978-3-030-32226-7_11.pdf), **Jintai Chen**, Yanjie Wang, Ruoqian Guo, Bohan Yu, Tingting Chen, Wenzhe Wang, Ruiwei Feng, Danny Z Chen, Jian Wu$$^*$$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)**, 2019

- [Multi-view learning with feature level fusion for cervical dysplasia diagnosis](https://link.springer.com/content/pdf/10.1007/978-3-030-32239-7_37.pdf), Tingting Chen, Xinjun Ma, Xuechen Liu, Wenzhe Wang, Ruiwei Feng, **Jintai Chen**, Chunnv Yuan, Weiguo Lu, Danny Z Chen, Jian Wu$$^*$$, **International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)**, 2019

