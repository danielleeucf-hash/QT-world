const TAIWAN_TIME_ZONE = "Asia/Taipei";
const TODAY_KEY = "qt:today";

const QT_LIBRARY = [
  {
    id: "john-good-shepherd",
    passage: "요한복음 10:1-18",
    title: "선한 목자의 음성",
    keyVerse: "나는 선한 목자라 선한 목자는 양들을 위하여 목숨을 버리거니와.",
    scripture: [
      "내가 진실로 진실로 너희에게 이르노니 양의 우리에 문으로 들어가지 아니하고 다른 데로 넘어가는 자는 절도며 강도요",
      "문으로 들어가는 이가 양의 목자라",
      "문지기는 그를 위하여 문을 열고 양은 그의 음성을 듣나니 그가 자기 양의 이름을 각각 불러 인도하여 내느니라",
      "자기 양을 다 내어 놓은 후에 앞서 가면 양들이 그의 음성을 아는 고로 따라오되",
      "타인의 음성은 알지 못하는 고로 타인을 따르지 아니하고 도리어 도망하느니라",
      "예수께서 이 비유로 저희에게 말씀하셨으나 저희는 그 하신 말씀이 무엇인지 알지 못하니라",
      "그러므로 예수께서 다시 이르시되 내가 진실로 진실로 너희에게 말하노니 나는 양의 문이라",
      "나보다 먼저 온 자는 다 절도요 강도니 양들이 듣지 아니하였느니라",
      "내가 문이니 누구든지 나로 말미암아 들어가면 구원을 얻고 또는 들어가며 나오며 꼴을 얻으리라",
      "도적이 오는 것은 도적질하고 죽이고 멸망시키려는 것뿐이요 내가 온 것은 양으로 생명을 얻게 하고 더 풍성히 얻게 하려는 것이라",
      "나는 선한 목자라 선한 목자는 양들을 위하여 목숨을 버리거니와",
      "삯군은 목자도 아니요 양도 제 양이 아니라 이리가 오는 것을 보면 양을 버리고 달아나나니 이리가 양을 늑탈하고 또 헤치느니라",
      "달아나는 것은 저가 삯군인 까닭에 양을 돌아보지 아니함이나",
      "나는 선한 목자라 내가 내 양을 알고 양도 나를 아는 것이",
      "아버지께서 나를 아시고 내가 아버지를 아는 것 같으니 나는 양을 위하여 목숨을 버리노라",
      "또 이 우리에 들지 아니한 다른 양들이 내게 있어 내가 인도하여야 할 터이니 저희도 내 음성을 듣고 한 무리가 되어 한 목자에게 있으리라",
      "아버지께서 나를 사랑하시는 것은 내가 다시 목숨을 얻기 위하여 목숨을 버림이라",
      "이를 내게서 빼앗는 자가 있는 것이 아니라 내가 스스로 버리노라 나는 버릴 권세도 있고 다시 얻을 권세도 있으니 이 계명은 내 아버지에게서 받았노라"
    ],
    meditation: "예수님은 우리를 익명으로 다루지 않으시고 이름을 불러 인도하시는 선한 목자이십니다. 양은 목자의 음성을 알고 따르지만, 낯선 음성 앞에서는 멈추고 도망합니다. 이 말씀은 우리가 매일 듣는 수많은 소리 가운데 어떤 음성을 신뢰하고 있는지 묻게 합니다. 선한 목자는 양을 이용하지 않고 양을 위해 목숨을 내어놓습니다. 그러므로 오늘의 묵상은 주님이 나를 알고 계신다는 위로에서 시작해, 나도 주님의 음성을 알아듣고 실제 선택으로 따르는 순종으로 이어져야 합니다. 두려움이 크게 들리는 순간에도 주님의 음성이 생명과 풍성함으로 부른다는 사실을 붙드십시오.",
    application: "오늘 결정해야 할 일 앞에서 먼저 주님의 음성에 맞는 선택인지 멈추어 점검하십시오.",
    prayer: "선한 목자 되신 주님, 낯선 음성에 흔들리지 않고 주님의 인도하심을 신뢰하며 따르게 하소서.",
    hymn: {
      number: "시편 찬양",
      title: "여호와는 나의 목자니",
      youtubeUrl: "https://www.youtube.com/results?search_query=%EC%97%AC%ED%98%B8%EC%99%80%EB%8A%94+%EB%82%98%EC%9D%98+%EB%AA%A9%EC%9E%90%EB%8B%88+%EB%82%98%EB%AC%B4%EC%97%94",
      embedUrl: "https://www.youtube.com/embed?listType=search&list=%EC%97%AC%ED%98%B8%EC%99%80%EB%8A%94%20%EB%82%98%EC%9D%98%20%EB%AA%A9%EC%9E%90%EB%8B%88%20%EB%82%98%EB%AC%B4%EC%97%94"
    }
  },
  {
    id: "matthew-first-kingdom",
    passage: "마태복음 6:19-34",
    title: "먼저 구할 나라",
    keyVerse: "너희는 먼저 그의 나라와 그의 의를 구하라.",
    scripture: [
      "너희를 위하여 보물을 땅에 쌓아 두지 말라 거기는 좀과 동록이 해하며 도적이 구멍을 뚫고 도적질하느니라",
      "오직 너희를 위하여 보물을 하늘에 쌓아 두라 거기는 좀이나 동록이 해하지 못하며 도적이 구멍을 뚫지도 못하고 도적질도 못하느니라",
      "네 보물 있는 그 곳에는 네 마음도 있느니라",
      "눈은 몸의 등불이니 그러므로 네 눈이 성하면 온 몸이 밝을 것이요",
      "눈이 나쁘면 온 몸이 어두울 것이니 그러므로 네게 있는 빛이 어두우면 그 어두움이 얼마나 하겠느뇨",
      "한 사람이 두 주인을 섬기지 못할 것이니 혹 이를 미워하며 저를 사랑하거나 혹 이를 중히 여기며 저를 경히 여김이라 너희가 하나님과 재물을 겸하여 섬기지 못하느니라",
      "그러므로 내가 너희에게 이르노니 목숨을 위하여 무엇을 먹을까 무엇을 마실까 몸을 위하여 무엇을 입을까 염려하지 말라 목숨이 음식보다 중하지 아니하며 몸이 의복보다 중하지 아니하냐",
      "공중의 새를 보라 심지도 않고 거두지도 않고 창고에 모아 들이지도 아니하되 너희 천부께서 기르시나니 너희는 이것들보다 귀하지 아니하냐",
      "너희 중에 누가 염려함으로 그 키를 한 자나 더할 수 있느냐",
      "또 너희가 어찌 의복을 위하여 염려하느냐 들의 백합화가 어떻게 자라는가 생각하여 보라 수고도 아니하고 길쌈도 아니하느니라",
      "그러나 내가 너희에게 말하노니 솔로몬의 모든 영광으로도 입은 것이 이 꽃 하나만 같지 못하였느니라",
      "오늘 있다가 내일 아궁이에 던지우는 들풀도 하나님이 이렇게 입히시거든 하물며 너희일까보냐 믿음이 적은 자들아",
      "그러므로 염려하여 이르기를 무엇을 먹을까 무엇을 마실까 무엇을 입을까 하지 말라",
      "이는 다 이방인들이 구하는 것이라 너희 천부께서 이 모든 것이 너희에게 있어야 할 줄을 아시느니라",
      "너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 더하시리라",
      "그러므로 내일 일을 위하여 염려하지 말라 내일 일은 내일 염려할 것이요 한 날 괴로움은 그 날에 족하니라"
    ],
    meditation: "염려는 미래를 통제하려는 마음에서 자라지만, 믿음은 아버지께서 이미 아신다는 고백에서 시작됩니다. 예수님은 먹고 입는 필요를 사소하게 여기지 않으십니다. 다만 그 필요가 우리 마음의 주인이 될 때, 하나님과 재물을 함께 섬기려는 분열이 생긴다고 말씀하십니다. 공중의 새와 들의 백합화는 아무것도 하지 말라는 예가 아니라, 돌보시는 아버지를 먼저 보라는 표지입니다. 오늘의 본문은 걱정을 억지로 부정하라고 하지 않고, 걱정보다 먼저 하나님의 나라와 의를 구하라고 초대합니다. 내 마음의 보물이 어디 있는지 살피고, 오늘 하루의 첫 선택을 하나님께 돌려드리십시오.",
    application: "오늘 해야 할 일 목록에서 하나님 나라의 가치와 무관한 염려 하나를 내려놓고, 먼저 순종할 한 가지를 정하십시오.",
    prayer: "아버지, 필요를 아시는 주님을 신뢰하며 오늘 먼저 주님의 나라와 의를 구하게 하소서.",
    hymn: {
      number: "복음성가",
      title: "먼저 그 나라와 의를 구하라",
      youtubeUrl: "https://www.youtube.com/results?search_query=%EB%A8%BC%EC%A0%80+%EA%B7%B8+%EB%82%98%EB%9D%BC%EC%99%80+%EC%9D%98%EB%A5%BC+%EA%B5%AC%ED%95%98%EB%9D%BC+%EC%98%88%EC%88%98%EC%A0%84%EB%8F%84%EB%8B%A8",
      embedUrl: "https://www.youtube.com/embed?listType=search&list=%EB%A8%BC%EC%A0%80%20%EA%B7%B8%20%EB%82%98%EB%9D%BC%EC%99%80%20%EC%9D%98%EB%A5%BC%20%EA%B5%AC%ED%95%98%EB%9D%BC%20%EC%98%88%EC%88%98%EC%A0%84%EB%8F%84%EB%8B%A8"
    }
  },
  {
    id: "romans-living-sacrifice",
    passage: "로마서 12:1-21",
    title: "삶으로 드리는 예배",
    keyVerse: "너희 몸을 하나님이 기뻐하시는 거룩한 산 제물로 드리라.",
    scripture: [
      "그러므로 형제들아 내가 하나님의 모든 자비하심으로 너희를 권하노니 너희 몸을 하나님이 기뻐하시는 거룩한 산 제사로 드리라 이는 너희의 드릴 영적 예배니라",
      "너희는 이 세대를 본받지 말고 오직 마음을 새롭게 함으로 변화를 받아 하나님의 선하시고 기뻐하시고 온전하신 뜻이 무엇인지 분별하도록 하라",
      "내게 주신 은혜로 말미암아 너희 중 각 사람에게 말하노니 마땅히 생각할 그 이상의 생각을 품지 말고 오직 하나님께서 각 사람에게 나눠주신 믿음의 분량대로 지혜롭게 생각하라",
      "우리가 한 몸에 많은 지체를 가졌으나 모든 지체가 같은 직분을 가진 것이 아니니",
      "이와 같이 우리 많은 사람이 그리스도 안에서 한 몸이 되어 서로 지체가 되었느니라",
      "우리에게 주신 은혜대로 받은 은사가 각각 다르니 혹 예언이면 믿음의 분수대로",
      "혹 섬기는 일이면 섬기는 일로 혹 가르치는 자면 가르치는 일로",
      "혹 권위하는 자면 권위하는 일로 구제하는 자는 성실함으로 다스리는 자는 부지런함으로 긍휼을 베푸는 자는 즐거움으로 할 것이니라",
      "사랑엔 거짓이 없나니 악을 미워하고 선에 속하라",
      "형제를 사랑하여 서로 우애하고 존경하기를 서로 먼저 하며",
      "부지런하여 게으르지 말고 열심을 품고 주를 섬기라",
      "소망 중에 즐거워하며 환난 중에 참으며 기도에 항상 힘쓰며",
      "성도들의 쓸 것을 공급하며 손 대접하기를 힘쓰라",
      "너희를 핍박하는 자를 축복하라 축복하고 저주하지 말라",
      "즐거워하는 자들로 함께 즐거워하고 우는 자들로 함께 울라",
      "서로 마음을 같이 하며 높은 데 마음을 두지 말고 도리어 낮은 데 처하며 스스로 지혜 있는 체 말라",
      "아무에게도 악으로 악을 갚지 말고 모든 사람 앞에서 선한 일을 도모하라",
      "할 수 있거든 너희로서는 모든 사람으로 더불어 평화하라",
      "내 사랑하는 자들아 너희가 친히 원수를 갚지 말고 진노하심에 맡기라 기록되었으되 원수 갚는 것이 내게 있으니 내가 갚으리라고 주께서 말씀하시니라",
      "네 원수가 주리거든 먹이고 목마르거든 마시우라 그리함으로 네가 숯불을 그 머리에 쌓아 놓으리라",
      "악에게 지지 말고 선으로 악을 이기라"
    ],
    meditation: "복음은 예배당 안의 고백에 머물지 않고 몸과 관계와 선택을 새롭게 합니다. 바울이 말하는 산 제사는 살아 있는 일상 전체가 하나님께 드려지는 예배라는 뜻입니다. 마음을 새롭게 한다는 것은 단지 좋은 생각을 더 많이 하는 정도가 아니라, 세상의 기준을 따라 반응하던 방식이 하나님의 뜻을 분별하는 방식으로 바뀌는 것입니다. 그래서 이 말씀은 은사를 겸손히 사용하고, 형제를 먼저 존중하며, 환난 중에도 소망을 붙들고, 심지어 핍박하는 자를 축복하는 삶으로 이어집니다. 오늘의 묵상은 내 예배가 말과 감정에 머물지 않고 실제 관계 속에서 선으로 악을 이기는 모습으로 나타나는지 돌아보게 합니다.",
    application: "오늘 만나는 한 사람에게 먼저 존중을 표현하고, 불편한 관계에서는 악순환을 끊는 선한 행동 하나를 선택하십시오.",
    prayer: "주님, 제 마음을 새롭게 하셔서 예배가 말에 머물지 않고 사랑과 평화의 삶으로 드러나게 하소서.",
    hymn: {
      number: "복음성가",
      title: "정결한 맘 주시옵소서",
      youtubeUrl: "https://www.youtube.com/watch?v=Y4B_8FVS4SE",
      embedUrl: "https://www.youtube.com/embed/Y4B_8FVS4SE"
    }
  }
];

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...init.headers
    }
  });
}

function taiwanDateFromTimestamp(timestamp = Date.now()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TAIWAN_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(timestamp));
}

function pickContent(date) {
  const utcDate = new Date(`${date}T00:00:00.000Z`);
  const dayIndex = Math.floor(utcDate.getTime() / 86400000);
  return QT_LIBRARY[dayIndex % QT_LIBRARY.length];
}

function buildTodayData(date, generatedBy) {
  const content = pickContent(date);

  return {
    date,
    timezone: TAIWAN_TIME_ZONE,
    generatedAt: new Date().toISOString(),
    generatedBy,
    passage: content.passage,
    title: content.title,
    keyVerse: content.keyVerse,
    scripture: content.scripture,
    meditation: content.meditation,
    application: content.application,
    prayer: content.prayer,
    hymn: content.hymn
  };
}

async function saveToday(env, data) {
  await env.QT_KV.put(`qt:${data.date}`, JSON.stringify(data));
  await env.QT_KV.put(TODAY_KEY, JSON.stringify(data));
}

async function generateToday(env, scheduledTime, generatedBy = "manual") {
  const date = taiwanDateFromTimestamp(scheduledTime || Date.now());
  const data = buildTodayData(date, generatedBy);
  await saveToday(env, data);
  return data;
}

async function getToday(env) {
  const today = await env.QT_KV.get(TODAY_KEY, "json");
  const taiwanToday = taiwanDateFromTimestamp();

  if (today && today.date === taiwanToday) {
    return today;
  }

  return await env.QT_KV.get(`qt:${taiwanToday}`, "json");
}

function isAuthorized(request, env) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const header = request.headers.get("authorization") || "";
  const bearer = header.startsWith("Bearer ") ? header.slice(7) : "";

  return Boolean(env.ADMIN_SECRET && (token === env.ADMIN_SECRET || bearer === env.ADMIN_SECRET));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/today") {
      const data = await getToday(env);

      if (!data) {
        return json({
          ok: false,
          message: "오늘의 묵상 데이터가 아직 생성되지 않았습니다."
        }, { status: 404 });
      }

      return json({ ok: true, data });
    }

    if (url.pathname === "/api/admin/generate-today") {
      if (!isAuthorized(request, env)) {
        return json({ ok: false, message: "Unauthorized" }, { status: 401 });
      }

      if (!["POST", "GET"].includes(request.method)) {
        return json({ ok: false, message: "Method not allowed" }, { status: 405 });
      }

      const data = await generateToday(env, Date.now(), "admin");
      return json({ ok: true, data });
    }

    return env.ASSETS.fetch(request);
  },

  async scheduled(controller, env, ctx) {
    ctx.waitUntil(generateToday(env, controller.scheduledTime, "cron"));
  }
};
