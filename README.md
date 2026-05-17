# QT World

매일 바뀌는 말씀 본문, Google Cloud TTS, 오늘의 찬송가, 한 줄 묵상을 돕는 정적 웹사이트입니다.

## 기능

- 오늘 날짜 기준 묵상 본문 자동 변경
- Google Cloud Text-to-Speech 기반 본문 읽기
- 오늘 본문과 어울리는 YouTube 찬송가 미리보기
- 한 줄 묵상 저장
- 브라우저 로컬 저장소 기반 묵상 기록 저장
- 저장된 묵상 삭제 및 인쇄 화면 지원

## Cloudflare Workers

이 프로젝트는 `qtworld.posmactw.workers.dev` 같은 Workers 도메인에서 정적 파일과 API를 함께 제공합니다.

### 설정

1. KV namespace를 생성합니다.

   ```bash
   npx wrangler kv namespace create QT_KV
   ```

2. 출력된 KV namespace `id`를 `wrangler.jsonc`의 `REPLACE_WITH_QT_KV_NAMESPACE_ID`에 넣습니다.

3. 관리자 수동 생성 API용 secret을 설정합니다.

   ```bash
   npx wrangler secret put ADMIN_SECRET
   ```

4. 배포합니다.

   ```bash
   npm run deploy
   ```

### API

- `GET /api/today`: 오늘의 묵상 데이터를 JSON으로 반환합니다.
- `POST /api/admin/generate-today`: 오늘 묵상 데이터를 즉시 생성합니다.

관리자 API는 아래 둘 중 하나로 인증합니다.

```bash
curl -X POST https://qtworld.posmactw.workers.dev/api/admin/generate-today \
  -H "Authorization: Bearer <ADMIN_SECRET>"
```

```bash
curl -X POST "https://qtworld.posmactw.workers.dev/api/admin/generate-today?token=<ADMIN_SECRET>"
```

Cron Trigger는 Cloudflare가 UTC 기준으로 실행하므로, 대만 시간 매일 오전 5시는 `0 21 * * *`로 설정되어 있습니다.
