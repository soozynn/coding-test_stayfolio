# 공통테스트-전수진

알고리즘 뇌를 깨우기 위한 재활 훈련

- [모집 안내문](https://lazymole.notion.site/Algo-Club-41fd8dadbf4f4ccbb38e0839f16b7781)
- [문제 리스트 정리](https://lazymole.notion.site/Algo-Club-41fd8dadbf4f4ccbb38e0839f16b7781#b34f38cb3d374a86aba2b00c3548902d)

## 테스트 방법

- lib : 알고리즘 문제 풀이
- test : 테스트 파일이 위치한 폴더

테스트 러닝은 아래 커맨드 라인을 이용합니다.

```
npm test
```

## 브랜치 전략 및 MR 생성 방법

main 브랜치는 정해진 날 새로운 문제가 올라가는 브랜치입니다.

- 브랜치 생성 : 활동 유저는 **본인 이름으로 된 브랜치**를 하나 생성 후 푸쉬해 주세요.
- 문제 풀이 : 알고리즘 풀이 시에는 **본인 브랜치에서 새로운 브랜치를 분기**해 주세요.
- MR 생성 : 풀이 완료 후 **새로운 브랜치로 푸쉬**, 그리고 **본인 브랜치로 MR 생성**해 주세요.
- 머지 : 하루를 마무리할 때 또는 다음 알고리즘 전까지 머지해 주시면 됩니다.

### 예시

1. 처음 브랜치를 생성하는 경우

```
git clone https://gitlab.com/Lazymole/algo-club.git
git checkout -b seojikang
git push origin seojikang
```

2. 알고리즘 문제 풀이 시

```
git checkout seojikang
git pull origin main

// 새 브랜치 이름은 다른 사람과 헷갈리지 않는 선에서 자유롭게 설정
git checkout -b seojikang/new

// 작업 후...
git add .
git commit -m "커밋 메시지"
git push origin seojikang/new

// GitLab으로 이동하여, seojikang/new > seojikang MR 생성
// MR 생성 시 Delete source branch 옵션을 체크 해주세요. (기본값 true)
```

### 굳이 새로운 브랜치를 따서 MR을 생성하는 이유는 무엇인가요?

시각적으로 참여 여부를 바로 확인하고, 서로의 코드를 공유하면서 배워 가는 것이 있도록 하기 위함입니다.  
코드 리뷰는 강제되지 않지만 자유롭게 코멘트를 남기거나 질문해도 좋습니다.

---

기타 문의 사항 및 의견 제안은 슬랙 DM 또는 이슈로 남겨주세요!
