// enum 枚舉 (自定義變數神器)

// 0 1 2
// 0 -> 關播
// 1 -> 開播
// 2 -> 多人連線

enum LiveStatus {
  'streaming' = 0,
  'closed' = 1,
  'multiple' = 2
}

let livestatus = 0

if (livestatus === LiveStatus.streaming) {
  // ...
}