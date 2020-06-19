export  class TablePage {
  public totalCount:number;
  public rows:Array<any>;
  constructor(totalCount:number,rows:Array<any>){
    this.totalCount = totalCount;
    this.rows = rows;
  }
}
