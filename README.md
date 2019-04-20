>> NodeJSTextBookStudy  
>> 노드제이에스 백엔드 서버개발자 실습

### 1. Expresss SNS service < nodebird >
---



* 사용한 미들웨어
  - express ( 웹 프레임워크 )
  - morgan ( logger )
  - cookieParser ( 쿠키 해석 )
  - session ( 세션 구현 ) 
  - connect-flash ( 일회성 메시지 출력 )
  - nodemon ( 서버자동시작 )
  - passport ( 로컬로그인 & 카카오로그인 )
  - multer ( 이미지 업로드 ) 
  
* 시용한 데이터베이스
  - MYSQL
  - sequelize ( Node 라이브러리 )
  
* Client Code
  - pug
  
+ < .env > 파일  
~~~
#dotenv 패키지를 이용한 비밀키 관리  
COOKIE_SECRET=nodebirdsecret  
KAKAO_ID=f266128012661edaed95082a79995420  
~~~
