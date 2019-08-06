@import url('https://fonts.googleapis.com/css?family=Varela+Round');
@GAP:15px;
@WHITE:#FBFBFB;
@BACKGROUND:#45494E;
@COLOR1:#FDA085;@COLOR1g:#F6D365;
@COLOR2:#BFF098;@COLOR2g:#6FD6FF;
@COLOR3:#EA8D8D;@COLOR3g:#A890FE;
@COLOR4:#D8B5FF;@COLOR4g:#1EAE98;
@COLOR5:#C6EA8D;@COLOR5g:#FE90AF;

*{
  box-sizing:border-box;
}

:root{
  --accent-color:@BACKGROUND;
  --gradient-color:@WHITE;
}

a:focus{
  outline:none;
  position:relative;
  &:after{
    width:50px;
  }
}

a:after{
  content:"";
  background:@WHITE;
  position:absolute;
  bottom:5px;
  left:@GAP;
  height:3px;
  width:0;
  transition:.5s;
  transition-delay:.2s;
}

body{
  background:@BACKGROUND;
  font-family:"Varela Round",Nunito,Montserrat,sans-serif;
  margin:0;padding:0;
  text-transform:capitalize;
}

.menu{
  margin:@GAP;
  > ol{
    list-style:none;
    margin:@GAP * 2 0;
    padding:0;

    > li{
      background:darken(@WHITE,75%);
      border-left:5px solid var(--gradient-color);
      margin-bottom:1px;
      position:relative;
      transition:.5s;
      &:nth-child(1){
        --accent-color:@COLOR1;
        --gradient-color:@COLOR1g;
      }
      &:nth-child(2){
        --accent-color:@COLOR2;
        --gradient-color:@COLOR2g;
      }
      &:nth-child(3){
        --accent-color:@COLOR3;
        --gradient-color:@COLOR3g;
      }
      &:nth-child(4){
        --accent-color:@COLOR4;
        --gradient-color:@COLOR4g;
      }
      &:nth-child(5){
        --accent-color:@COLOR5;
        --gradient-color:@COLOR5g;
      }
      a{
        color:@WHITE;
        display:block;
        padding:@GAP;
        position:relative;
        text-decoration:none;
        z-index:1;
        &:not(:last-child){
          &:before{
            content:"\f078";
            font-family:fontAwesome;
            font-size:.75em;
            line-height:50px;
            position:absolute;
            right:25px;
            top:0;
            bottom:0;
            margin:auto;
            transition:.5s;
          }
        }
      }
      &:focus,&:focus-within,&:hover{
        z-index:100;

        &:after{
          background:linear-gradient(to left, var(--accent-color), var(--gradient-color));
          max-width:800px;
        }
      }
      &:focus,&:focus-within{
        .sub-menu{
          max-height:500px;
        }
        a:before{
          transform:rotate(-180deg);
        }
      }
      &:after{
        background:darken(@WHITE,75%);
        content:"";
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        transition:.5s;
        max-width:0;
        overflow:hidden;
      }
    }
    .sub-menu{
      border-left:1px solid @WHITE;
      margin-left:@GAP*1.5;
      list-style:none;
      max-height:0px;
      overflow:hidden;
      padding-left:@GAP/2;
      position:relative;
      transition:.5s;
      z-index:1;
      li{
        font-size:.9em;
        &:hover,a:focus{
          background:fade(darken(@WHITE,75%),30%);
        }
        a:after{
          bottom:5px;
          height:1px;
        }
        a:hover,a:focus{
          &:after{
            width:15px;
          }
        }
      }
    }
  }
}

@media (min-width:600px){
  a:focus,a:hover{
    position:relative;
    &:after{
      width:50px;
    }
  }

  a:after{
    left:0;
    right:0;
    margin:auto;
  }

  .menu{
    margin:0;
    margin-top:40vh;
  }
  .menu > ol{
    display:block;
    max-width:none;
    text-align:center;
    > li{
      border-top:5px solid var(--accent-color);
      border-left:0;
      display:inline-block;
      margin-left:-5px;
      vertical-align:top;
      width:120px;
      &:hover,&:focus,&:focus-within{
        &:after{
          background:linear-gradient(to bottom, var(--accent-color), var(--gradient-color));
          border-radius:3px;
          top:-@GAP;
          bottom:-@GAP;
          left:-@GAP;
          right:-@GAP;
        }

        .sub-menu{
          max-height:750px;
        }
      }

      a:not(:last-child){
        &:before{
          right:12.5px;
        }
      }

      &:hover{
        a:before{
          transform:rotate(-180deg);
        }
      }
    }
    .sub-menu{
      border-left:0;
      margin:@GAP -@GAP -@GAP;
      padding-left:0;
    }
  }
}


@media (min-width:775px){
  .menu > ol{
    > li{
      width:150px;

      a:not(:last-child){
        &:before{
          right:25px;
        }
      }
    }
  }
}
