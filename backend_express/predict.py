from tensorflow import keras
import cv2
import numpy as np
import sys

condition = ["Healthy","Powdery","Rusty"]

def predictPlant(image):
    model = keras.models.load_model('plant_model.h5')
    #reading the image into a numpy array
    img = cv2.imread(image)
    img = cv2.resize(img, (225, 225), interpolation=cv2.INTER_AREA)
    img = img / 255
    img = np.expand_dims(img, axis=0)
    y_predict = model.predict(img)
    print(condition[np.argmax(y_predict)])


predictPlant(sys.argv[1])
