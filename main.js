const stud={

}
const input=readline.createInterface({
    input:Process.stdin,
    output:Process.stdout
})
input.question("Enter Name\r\n",function(name){
    stud.name=name;
    input.question("City \r \n",function(city){
        stud.city=city;
        input.question("Enter age",function(age){
            stud.age=age;
            input.question("Enter marks",function(marks){
                stud.marks=marks;


                input.write("Entry success");
                input.write('your details are ${JSON.stringify(stud)}');

                input.close();
            })
        })
    })

})