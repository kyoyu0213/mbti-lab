/* ============================================================
   MBTI 16タイプ 共通データ（コード・日本語名称・グループ）
   表示は mbtiLabel("INTP") => "INTP（論理学者）" を基本に統一。
   group: NT（紫）/ NF（ミント）/ SJ（ブルー）/ SP（オレンジ）
   ============================================================ */
const MBTI_TYPES = {
  INTJ: { name: '建築家',          group: 'NT' },
  INTP: { name: '論理学者',        group: 'NT' },
  ENTJ: { name: '指揮官',          group: 'NT' },
  ENTP: { name: '討論者',          group: 'NT' },
  INFJ: { name: '提唱者',          group: 'NF' },
  INFP: { name: '仲介者',          group: 'NF' },
  ENFJ: { name: '主人公',          group: 'NF' },
  ENFP: { name: '運動家',          group: 'NF' },
  ISTJ: { name: '管理者',          group: 'SJ' },
  ISFJ: { name: '擁護者',          group: 'SJ' },
  ESTJ: { name: '幹部',            group: 'SJ' },
  ESFJ: { name: '領事',            group: 'SJ' },
  ISTP: { name: '巨匠',            group: 'SP' },
  ISFP: { name: '冒険家',          group: 'SP' },
  ESTP: { name: '起業家',          group: 'SP' },
  ESFP: { name: 'エンターテイナー', group: 'SP' }
};
function mbtiName(code)  { var t = MBTI_TYPES[code]; return t ? t.name : ''; }
function mbtiGroup(code) { var t = MBTI_TYPES[code]; return t ? t.group : ''; }
function mbtiLabel(code) { var n = mbtiName(code); return n ? code + '（' + n + '）' : code; }
