<!DOCTYPE html>
<head>
    <title>EB bill Calculator</title>
    <style>
       #body{
            margin:220px 500px ;
            border: 2px solid #009688;
            padding: 20px 80px;
            background: #009688;
            

        }
        #resultBox{
            font-size: 30px;
        }
    </style>
</head>
<body>
    <div id="body">
    <div id="iptbox">
        <input type="number" id="ipt" placeholder="Enter units">
        <button onclick="convert()">Click Me</button>

    </div><br>
    <div style="color:rgb(242, 246, 242) "id="resultBox">
        
    </div> <br>
    <p style="color: bisque;">*Only below 500unit</p>
   </div>
    <script>
        
        function convert(){
            let x=document.getElementById("ipt").value
            let z= Math.round(x / 10) * 10
            console.log(z)

            
            if (z<=100){
                let y=0
                let ans=document.getElementById("resultBox")
                ans.innerHTML=`The amount is ${y}`
            }
            else if(z>=101 && z<=200){
                let y=(z-100)*2.25
                let ans=document.getElementById("resultBox")
                ans.innerHTML=`The amount is ${y}`
             }
             else if(z>=201 && z<=400){
                let y=((z-200)*4.50)+225
                let ans=document.getElementById("resultBox")
                ans.innerHTML=`The amount is ${y}`
             }
             else if(z>=401 && z<=500){
                let y=((z-400)*6)+1125
                let ans=document.getElementById("resultBox")
                ans.innerHTML=`The amount is ${y}`
             }




        }
        
         



    </script>
    
</body>
</html>
