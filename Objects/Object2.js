let employee={
    frstname:"Brian",
    lasname:"smith",
    fullname:function(){
        let output=this.frstname + "..."+this.lasname;
        console.log(output);
    }
}
employee.fullname();