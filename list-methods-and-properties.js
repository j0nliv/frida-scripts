Java.perform(()=>{
    const activityClass = Java.use("com.example.exampleapp.MainActivity");
    console.log(activityClass);
    console.log(Object.getOwnPropertyNames(activityClass));
});