import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import isNil from 'lodash/fp/isNil'
import styles from './ModalStyle';

class Modal extends Component {

     constructor(props){
          super(props);

          this.handleKeyUp = this.handleKeyUp.bind(this);
          this.handleOutsideClick = this.handleOutsideClick.bind(this);
     }

     componentDidMount(){
          window.addEventListener('keyup',this.handleKeyUp,false);
          document.addEventListener("click",this.handleOutsideClick,false);
     }

     componentWillMount(){
          window.removeEventListener("keyup",this.handleKeyUp,false);
          document.removeEventListener("click",this.handleOutsideClick,false);
     }


     handleKeyUp(e){
          const { onCloseRequest } = this.props;

          //抑えとくべきポイント
          // 下記の "27" は "esc"キーのキーコード（すなわち、キーボードのボタンの番号）
          // それは JSの場合 "e.keyCode" でクリックしたボタンのキーコードを取得できる
          //下記のオブジェクトに27というプロパティをセットする
          //if構文で、27(escキー)がクリックされた場合のみ、27にセットされている関数群《 ()=>{} 》の3つの関数が実行される
          const keys= {
               27: ()=>{
                    e.preventDefault();//デフォルト処理をキャンセルする
                    onCloseRequest();//モーダルウィンドウをクローズする
                    window.removeEventListener("keyup",this.handleKeyUp, false);//WindowにセットされたEveneListenerを解除
               }
          };
          console.log('【handleKeyUp keys】keys',keys);

          if (keys[e.keyCode]) {
               console.log('発動！！！！！！！！！！！！！！！',e.keyCode);

               keys[e.keyCode]();
          }
     }

     handleOutsideClick(e){
          const { onCloseRequest } = this.props;

          if(!isNil(this.modal)){
               if(!this.modal.contains(e.target)){
                    onCloseRequest();
                    document.removeEventListener("click",this.handleOutsideClick,false);
               }
          }
     }

     render(){
          const { onCloseRequest, children, classes,onDeleteTodo } = this.props;
          // console.log('Modal',this.props);

          return (
               <div className={classes.modalOverlay}>
                    <div className={classes.modal} ref={node=>(this.modal=node)}>
                         <div className={classes.modalContent}> {children} を削除しますか？</div>
                         <form
                              onSubmit={e=>e.preventDefault()}
                         >
                              <button onClick={onCloseRequest}>Cancel</button>
                              <button onClick={onDeleteTodo}>Delete</button>
                         </form>
                    </div>
                    <button
                         type="button"
                         className={classes.closeButton}
                         onClick={onCloseRequest}
                    />
               </div>
          );
     }
}

Modal.propsTypes={
     onCloseRequest: PropTypes.func,
     children: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.node),
          PropTypes.node
     ]),
     sheet: PropTypes.object,
     classes: PropTypes.object
};

export default injectSheet(styles)(Modal)