1. Back-end 세팅: 데이터베이스 세팅, 웹소켓 세팅
- npm 초기 세팅: npm init -y
- 라이브러리 설치: npm i express mongoose cors dotenv http
  express: node 서버 구축
  mongoose: mongoDB 쉽게 사용
  cors: 프론트-백 연결
  dotenv: 환경변수 접근
  http: http서버구축(웹소켓)
- 핵심 라이브러리 설치: npm i socket.io
- 데이터베이스 저장 정보: 유저이름, 메세지내용
- 서버실행 : npm i -g nodemon (파일변화 발생 시, 자동 리로딩)
- MacOS mongdb세팅
 1) brew tap mongodb/brew
 2) brew update
 3) brew install mongodb-community@6.0
    [Error]
     If that doesn't show you any updates, run:
        sudo rm -rf /Library/Developer/CommandLineTools
        sudo xcode-select --install
        --> 설치된 후 다시 3번 명령어 재실행하면 성공
 
 4) CLI접근 brew install mongodb-community-shell
    [명령어]
    1. DB생성: use 데이터베이스명
    2. 현재 사용중인 DB조회: db
    3. 전체 DB조회: show dbs
    4. DB 접근: use 데이터베이스명
    5. Collection 조회: show collections
    6. Collection 내 Document 조회: db.collection명.find() -> 저장된 데이터 출력
    7. 데이터 저장 명령어
     - 하나의 데이터 저장: db.collection명.insertOne({key:value,...}) 
     - 여러 데이터 저장: db.collection명.inserMany({key:value,..},{...},{...})
    8. 데이터 조회 명령어
     - 전체 조회: db.collection명.find()
     - 특정 데이터 조회: db.collection명.find({key:value})

 5) DB실행 brew services start mongodb-community@6.0
 6) DB정지 brew services stop mongodb-community@6.0

2. Front-end 세팅: 웹소켓 세팅

3. 연결 테스트

4. 유저 로그인

5. 메세지 주고받기


* 참고 사이트 : https://inpa.tistory.com/entry/SOCKET-%F0%9F%93%9A-SocketIO-%EC%82%AC%EC%9A%A9-%ED%95%B4%EB%B3%B4%EA%B8%B0