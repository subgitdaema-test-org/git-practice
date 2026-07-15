# 팀장/팀원 협업 사이클 가이드 (develop → PR → merge → 정리)

## 0. 사전 준비 (최초 1회만)
- 팀장: Organization 생성, 레포지토리 생성
- 팀장: 팀원을 Organization/레포에 Write 권한으로 초대
- 팀원: 초대 수락 후 로컬에 clone
      git clone git@github.com:조직명/레포명.git
      cd 레포명
      code .

---

## 1. develop 브랜치 생성 (팀장, 웹)
- 레포 메인 페이지 → 브랜치 드롭다운 클릭 → `develop` 입력 →
  `Create branch: develop from 'main'`

## 2. develop 보호 규칙 설정 (팀장, 웹)
- 레포 → Settings → Branches → Add branch protection rule
      Branch name pattern: develop
      ✅ Require a pull request before merging
      ✅ Require approvals (1개 이상)

---

## 3. 작업 시작 3종 세트 (팀원)
      git checkout develop
      git pull origin develop
      git checkout -b <작업브랜치명>        예: fix/email-validation

- ⚠️ 코드를 열기 전, VS Code 좌측 하단 브랜치명이
  develop/main이 아닌 작업 브랜치인지 반드시 확인

## 4. 작업 실시 (팀원)
- 코드 수정/추가
- 로컬 테스트 실행 및 통과 확인

## 5. 커밋 & 푸시 (팀원)
      git add .
      git commit -m "fix: 커밋 메시지"
      git push -u origin <작업브랜치명>

---

## 6. PR 생성 (팀원, 웹)
- Base: develop ← Compare: 작업브랜치명
- Reviewers: 팀장 지정
- 제목 예시:
      fix: 이메일 형식 검증 추가
- 본문 템플릿 예시:
      ## 변경 사항
      - 무엇을 왜 바꿨는지

      ## 테스트 방법
      1. 실행 방법
      2. 확인 포인트

      ## 체크리스트
      - [x] 로컬 테스트 통과
      - [ ] 리뷰어 승인

## 7. 리뷰 (팀장, 웹)
- PR 페이지 → Files changed 탭 → Review changes 클릭
- 옵션 선택:
      Approve            → 승인, Submit review
      Request changes    → 코멘트 작성 후 Submit review

### 7-A. Request changes인 경우
- 팀원: 코드 수정 후 재커밋 & 푸시 (같은 브랜치, PR 자동 갱신)
      git add .
      git commit -m "fix: 리뷰 반영"
      git push
- 팀원: PR 페이지에서 팀장에게 Re-request review
- 팀장: 다시 Files changed 확인 → 승인 시 8번으로

---

## 8. Merge (팀원, 웹)
- 승인 완료 시 Merge pull request 버튼 활성화
- Squash and merge 선택 → Confirm

## 9. 로컬 정리 (팀원)
      git checkout develop
      git pull origin develop
      git branch -d <작업브랜치명>
      git push origin --delete <작업브랜치명>

| 명령어 | 역할 |
|---|---|
| checkout develop | 삭제할 브랜치에서 벗어나기 위해 이동 |
| pull origin develop | 로컬 develop을 merge된 최신 상태로 동기화 |
| branch -d | 다 쓴 로컬 브랜치 삭제 |
| push origin --delete | 다 쓴 원격 브랜치 삭제 |

---

## 한 사이클 요약
      develop 생성/보호 (팀장, 웹)
        → 작업 브랜치 생성 (팀원)
        → 작업/테스트/커밋/푸시 (팀원)
        → PR 생성 (팀원)
        → 리뷰: 승인 또는 반려 (팀장)
        → (반려 시 수정 → 재요청 → 재검토 반복)
        → Merge (팀원)
        → 로컬/원격 브랜치 정리 (팀원)