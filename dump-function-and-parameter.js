Java.perform(()=>{
    const classA = Java.use("sg.vantagepoint.uncrackable1.a");
    
    classA.a.overload("java.lang.string").implementation = function(s){
        console.log(s.toString());
        return true;
    }

});