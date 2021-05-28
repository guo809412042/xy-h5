import { makeAutoObservable, observable, action  } from 'mobx';
class Store {
  constructor(){
    makeAutoObservable(this,{
      isPlay: observable,
      setPlayState: action 
    });
  }
  isPlay = false
  setPlayState = () => {
    this.isPlay = !this.isPlay
  }
}

export default new Store();