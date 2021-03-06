import { Component } from '@angular/core';
import './app.component.css';
import { log } from 'util';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    numArr = [0];
    inputNum: any = 1;//input現在的東西，可能是個數字，也可能是個空字符串
    changeNum(e) {
        e = e || window.event;
        let oldNum: number = this.inputNum || 0,//規定數字是因為下面要比大小
            nowNum: number = Math.min((parseInt(e.target.value) || 0), 6666);//6666是防止數字太大當機
        if (nowNum === 6666) {
            this.inputNum = 6666;
            e.target.value = 6666;
        } else {
            this.inputNum = e.target.value;
        }

        //circle渲染開始
        if (nowNum > oldNum) {//新數據比舊數據多
            for (let i = oldNum; i < nowNum; i++) {
                this.numArr[i] = i;
            }
            // console.log('新增');
            return;
        }
        if (nowNum < oldNum) {//新數據比舊數據少
            let vNum = oldNum - nowNum;
            for (let i = 0; i < vNum; i++) {
                this.numArr.pop();
            }
            // console.log('刪除');
            return;
        }
        //circle渲染結束
    }
}
