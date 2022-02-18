interface OBJ2 {
  name: string
}

const obj4: OBJ2 = { name: '' }

interface UserInterface {
  id: number
  name: string
  age: number
  address: string

  add: (data: any) => void
  update: (id: number) => boolean
  delete: (id: number) => boolean
}

class LiveUser implements UserInterface {
  id: number
  name: string
  age: number
  address: string

  add(data: any) {}
  update(id: number) {
    return false
  }
  delete(id: number) {
    return false
  }

  // 額外新增的功能
  startLive() {}
  endLive() {}
}

class VideoUser implements UserInterface {
  id: number
  name: string
  age: number
  address: string

  add(data: any) {}
  update(id: number) {
    return false
  }
  delete(id: number) {
    return false
  }

  // 額外新增的功能
  postVideo() {}
  deleteVideo() {}
}