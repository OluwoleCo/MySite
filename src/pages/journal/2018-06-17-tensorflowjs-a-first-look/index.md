---
title:  "TensorFlow.js: A first look"
---

![TFjs](./tf.png)

I'm super excited about TensorFlowJS because machine learning is becoming more accessible. Writing ML in JS will give access to more devs who are comfortable with JS to try out ML. I'll be taking TensorFlowJS for a spin.

### Tensors?

A tensor is a data structure that can store any n-dimentional number of scalar,vector and matrix.

* A scalar is a single number for example `3`.
* A vector is a one dimentional list for example `[2,3,4,5]`.
* A
matrix is a two or more dimentional object for example, [[1,2,3], [7,6,5]]

TensorFlow is an open sourced machine learning library developed at Google. It is written in C++. It has a binding that
allows code to be written in the python programming language.

### Origin of TensorFlow.js

TensorFlowJS started as DeepLearningJS. DeepLearningJS was a project by some Google engineer where they wrote the entire TensorFlow 
algorithm and API in JavaScript. The Deeplearn.js library enabled training of neural networks within a browser, requiring no software installation or back end. More importantly, Using the WebGL JavaScript API for 2D and 3D graphics, Deeplearn.js  can conduct computations on the GPU.

In March 2018, the deeplearning.js project became part of TensorFlow and it has been optimised for it.

### APIs

TensorFlow is a low level library and another library such as [Keras][K] is often used to access its APIs. Similarly, TensorFLow.js has a **core API**, which is equivalent to TensorFlow and the **layers API** which is equivalent to keras.'

### Core API

There are a few important APIs that are important

To create a tensor,

```javascript
tf.tensor([1,2,3,4])

```

```javascript
tf.tensor([1, 2, 3, 4], [2, 2])

```
The above specifies the shape of the tensor. So, above, we are drawing a 2 x 2 tensor.

You can also specify the dimension of the tensor while creating it

```javascript
tf.tensor1d([1,2,3]) //Creates a 1-dimentional tensor
tf.2d([[1,2], [3,4]]) //Creates a 2-dimentional tensor
```

### Operations

Tensor operations requries some knowledge of linear algebra to better understand matrix operations

### Arithmetics

```javascript
//Addition
const a = tf.tensor1d([1, 2, 3, 4]);
const b = tf.tensor1d([10, 20, 30, 40]);
a.add(b)
// returns [11, 22, 33, 44]

//Subtraction
b.sub(a)
// returns [9, 18, 27, 36]

//Multiplication
a.mul(b)
// returns [10, 40, 90, 160]

// Division
b.div(a)
returns [10, 10, 10, 10]
```

### Matrix Operations

```javascript
//Dot Product
const a = tf.tensor1d([1, 2]);
const b = tf.tensor2d([[1, 2], [3, 4]]);
a.dot(b);
//Returns [7, 19]

//Outer Product
const a = tf.tensor1d([1, 2, 3]);
const b = tf.tensor1d([3, 4, 5]);
tf.outerProduct(a, b)
// Returns [[3, 4 , 5 ], [6, 8 , 10], [9, 12, 15]]

tf.outerProduct(a, b)
```




[K]: https://keras.io