class Model {
  private list: taskModel[] = [];

  constructor() {
    this.list = [];
  }

  setList(e: taskModel[]) {
    this.list = e;
  }

  getList() {
    return this.list;
  }
}

export default Model;
