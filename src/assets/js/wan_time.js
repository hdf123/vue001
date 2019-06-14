// 方法1
// export default { 
//     times:()=>{
//         console.log("方法1");
//     }
// }

// 方法2
// const configFun = function(){
//     console.log("方法2");
// };
// export {config,configFun}

export default { 
/**
 * 万维易源---时间戳
 */
    times:()=>{
        var timestamp=new Date().getTime();//当前时间戳
        var times=getMyDate(timestamp);
        function getMyDate(str){
            var oDate = new Date(str),
                oYear = oDate.getFullYear(),//年
                oMonth = oDate.getMonth()+1,//月
                oDay = oDate.getDate(),//日
                oHour = oDate.getHours(),//时
                oMin = oDate.getMinutes(),//分
                oSen = oDate.getSeconds(),//秒
                oFf=oDate.getMilliseconds()//毫秒
                var oTime = oYear + getzf(oMonth) + getzf(oDay) + getzf(oHour) + getzf(oMin) +getzf(oSen);//最后拼接时间
            return oTime;
        };
        //补0操作
        function getzf(num){
            if(parseInt(num) < 10){
                num = '0'+num;
            }
            return num;
        }
    }
}
