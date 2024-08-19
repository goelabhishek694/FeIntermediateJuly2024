function react(component){
    let dom=component();
    console.log("optimizing changes");
    return dom;
}