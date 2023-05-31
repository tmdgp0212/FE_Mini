# 📋연차 / 당직 관리 프로그램
![2023-05-31 13 16 15](https://github.com/tmdgp0212/FE_Mini/assets/112364408/f8d9d3f4-a4d6-48ce-bf8b-0d954d81a42a)

사원들은 연차 혹은 당직을 신청하고 관리자는 해당 당직과 연차에 대한 승인권한을 가지도록 하는 연차/당직 관리 프로그램입니다

- 작업기간 : 23.05.01 ~ 23.05.17
- 작업인원 : FE 5,  BE 4 (총 9인)

## 🛠️기술스택

- Basic: `react`, `typescript`
- Library: `axios`, `react-query`, `msw`, `react-big-calendar`, `react-router-dom`, `redux`, `react-hook-form`, `emotion`, `mui`


## 📁프로젝트 구조

```
┌─ README.md
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
└─ src
   ├─ App.tsx
   ├─ main.tsx
   ├─ api
   ├─ components
   │  └─ 각 페이지에 필요한 컴포넌트 모음
   ├─ hooks
   │  └─ 각 페이지에 필요한 훅
   ├─ mock
   │  └─ 목업 API
   ├─ pages
   │  └─ 페이지 별 컴포넌트
   ├─ routes
   │  └─ 경로 관련 컴포넌트
   ├─ store
   │  └─ 유저관련 전역상태 관리
   ├─ styles
   │  └─ 스타일 관련 요소
   ├─ types
   │  └─ 전역적으로 사용 할 interface 모음
   └─ utils
      └─ 전역적으로 사용 할 유틸 모음
```
