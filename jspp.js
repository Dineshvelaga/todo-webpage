let todo=[];
let ch= prompt("please enter your choice");
while(true){
    
        if(ch=="add")
            {
                console.log("add a element");
                tsk=prompt("enter the task");
                todo.push(tsk);
                console.log(tsk)
                
            }
        if (ch=="list")
            {
                console.log("tasks to do");
                for (i=0;i<todo.length;i++){
                    console.log(todo[i]);
                }

            }
        if (ch=="delete")
            {
                dtsk=prompt("enter the task to delete index");
               todo.splice(dtsk,1);
                console.log("task deleted");
            }
            if (ch=="quit")
                {
                    console.log("quiting");
                    break;
                }
        ch=prompt("please enter the task you want")
    
}