import Vue from 'vue'
import moment from 'moment'
Vue.filter('timeformat',(arg)=>{
  return moment().format('MMMM Do YYYY, h:mm:ss a'); // February 21st 2020, 3:41:55 pm
})



Vue.filter('shortlength',function(text,length,suffix){
  return text.substring(0,length)+suffix;
});