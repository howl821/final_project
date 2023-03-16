var submitYN = true;
      
      const form = new FormData()
        form.append('memberId', memberId)
        form.append('memberPw', memberPw)
      
        console.log("click login");

			axios.post('http://localhost:9008/loginAction.do', 
          form
        ,{ 
          headers:{ 
           'Content-type': 'application/json', 
             } 
        }
        )
      .then((res) => {
          console.log(res.data);

          if(res.data != "N"){
            alert(res.data + "회원님, 환영합니다");
            sessionStorage.setItem("member_id", memberId); // sessionStorage에 id 저장
            sessionStorage.setItem("name", res.data); // sessionStorage에 name 저장
            document.location.href="/"
          }else{
            alert("회원정보 가입을 해주세요");
            document.location.href = "/login";
          }
        })
          .catch()
        
    