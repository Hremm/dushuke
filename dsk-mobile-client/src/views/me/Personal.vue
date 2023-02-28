<template>
    <div>
     <VueCropper 
     ref="cropper" 
     autoCrop
     centerBox
     autoCropWidth="150"
     autoCropHeight="150"
     mode="cover"
     img="https://img2.baidu.com/it/u=319942725,1200436631&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"  
     :outputSize="1" 
     outputType="jpeg"
   ></VueCropper>
   </div>
</template>
<script>
  import 'vue-cropper/dist/index.css' 
  import { VueCropper }  from "vue-cropper";
  
  // 裁剪后图片数据 base64格式/blob格式	
  const cropper = ref()
  function changeImg(){ 
    cropper.value.getCropData(data => {
      // do something
      console.log('base64',data)  
    })
    cropper.value.getCropBlob(data => {
      // do something
      console.log('blob',data)   
    })
  }
</script>
