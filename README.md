>> NodeJSTextBookStudy  
>> 노드제이에스 백엔드 서버개발자 실습

### 1. Expresss SNS SERVICE < nodebird >
---



* 사용한 미들웨어
  - express ( 웹 프레임워크 )
  - morgan ( logger )
  - cookieParser ( 쿠키 해석 )
  - exporess-session ( 세션 구현 ) 
  - connect-flash ( 일회성 메시지 출력 )
  - nodemon ( 서버자동시작 )
  - passport ( 로컬로그인 & 카카오로그인 )
  - multer ( 이미지 업로드 ) 
  - sequelize ( MYSQL-Node linking 라이브러리 )
  
* 시용한 데이터베이스
  - MYSQL
  
* Client Code
  - pug

* Error
  + sequelize version error 
  
+ < .env > 파일  
~~~
#dotenv 패키지를 이용한 비밀키 관리  
COOKIE_SECRET=nodebirdsecret  
KAKAO_ID=f266128012661edaed95082a79995420  
~~~

### 1.1. WEP API SERVER < nodebird >
---

* 사용한 미들웨어
  - jsonwebtoken
  - express
  - cookieParser
  - passport
  - morgan
  - exporess-session
  - connect-flash
  - dotenv


+ <. env 파일 >
~~~
# JWT 토큰으로 인증하기
COOKIE_SECRET=nodebirdsecret
KAKAO_ID=f266128012661edaed95082a79995420
JWT_SECRET=jwtSecret
~~~


### 1.2. API CALL SERVER < nodebird >
---

* 사용한 미들웨워
  - axios ( 프로미스 기반 HTTP 요청 송신 패키지 )
  - exporess
  - morgan
  - cookieParser
  - express-session
  - dotenv
  - pug
  
+ <. env 파일 >
~~~
# CLIENT_SECRET=API 서버로부터 받은 클라이언트 비밀키
COOKIE_SECRET=nodebirdcall
CLIENT_SECRET=3b021d95-cb24-41f3-b16a-8770984d5468
~~~
   
### 1.3

* 미들웨어 호출시 무조건 콜백 마지막인자로 next 를 넘겨줘야할 때가 있고 아닐때가 있음.
* 몽고DB는 네임스페이스에 따라 저장되어있는 콜렉션이 다름. 


### 2. Socket Chat Server
---

* 사용한 미들웨어
  - express
  - morgan
  - cookie-parser
  - express-session
  - connect-flash
  - color-hash ( 랜덤한 컬러로 해쉬 )
  - socket.io ( 소켓 I.O. )
  - ws ( 웹 소켓 )
  - multer
  - axios

### 3. Realtime Auction Server  
---

* 사용한 미들웨어
  - express
  - morgan
  - cookie-parser
  - express-session
  - connect-flash
  - passport
  - socket.io
  - multer
  - sequelize
  - sse ( 서버 센트 이벤트 - 실시간 처리 )
  - node-schedule ( 스케줄링 )
