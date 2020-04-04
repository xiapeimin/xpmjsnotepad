/* global note,$dlgFont,$dlgAbout: true */
/* eslint no-console: ["error", { allow: ["log"]  }] */
note.menuData = [
  { 
    title: '文件(F)',
    menuItems: [
      {
        title: '新建(N)',
        shortcut: 'Ctrl+N',
        enabled: true,
        handler: function() { console.log('新建'); }
      },
      {
        title: '打开(O)...',
        shortcut: 'Ctrl+O',
        enabled: true,
        handler: function() { console.log('打开'); }
      },
      {
        title: '保存(S)',
        shortcut: 'Ctrl+S',
        enabled: true,
        handler: function() { console.log('保存'); }
      },
      {
        title: '另存为(A)...',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('另存为'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '页面设置(U)...',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('页面设置'); }
      },
      {
        title: '打印(P)...',
        shortcut: 'Ctrl+P',
        enabled: true,
        handler: function() { console.log('打印'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '退出(X)',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('退出'); }
      }
    ],
    width: '202px',
    left: '0px'
  },
  { 
    title: '编辑(E)',
    menuItems: [
      {
        title: '撤销(U)',
        shortcut: 'Ctrl+Z',
        enabled: false,
        handler: function() { console.log('撤销'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '剪切(T)',
        shortcut: 'Ctrl+X',
        enabled: true,
        handler: function() { console.log('剪切'); }
      },
      {
        title: '复制(C)',
        shortcut: 'Ctrl+C',
        enabled: false,
        handler: function() { console.log('复制'); }
      },
      {
        title: '粘贴(P)',
        shortcut: 'Ctrl+V',
        enabled: false,
        handler: function() { console.log('粘贴'); }
      },
      {
        title: '删除(L)',
        shortcut: 'Del',
        enabled: false,
        handler: function() { console.log('删除'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '使用 Bing 搜索...',
        shortcut: 'Ctrl+E',
        enabled: true,
        handler: function() { console.log('使用 Bing 搜索'); }
      },
      {
        title: '查找(F)...',
        shortcut: 'Ctrl+F',
        enabled: false,
        handler: function() { console.log('查找'); }
      },
      {
        title: '查找下一个(N)',
        shortcut: 'F3',
        enabled: false,
        handler: function() { console.log('查找下一个'); }
      },
      {
        title: '替换(R)...',
        shortcut: 'Ctrl+H',
        enabled: true,
        handler: function() { console.log('替换'); }
      },
      {
        title: '转到(G)...',
        shortcut: 'Ctrl+G',
        enabled: true,
        handler: function() { console.log('转到'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '全选(A)',
        shortcut: 'Ctrl+A',
        enabled: true,
        handler: function() { console.log('全选'); }
      },
      {
        title: '时间/日期(D)',
        shortcut: 'F5',
        enabled: true,
        handler: function() { console.log('时间/日期'); }
      },
    ],
    width: '218px',
    left: '52px'
  },
  { 
    title: '格式(O)',
    menuItems: [
      {
        title: '自动换行(W)',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('自动换行'); }
      },
      {
        title: '字体(F)...',
        shortcut: '',
        enabled: true,
        handler: function() {$dlgFont.show();}
      }
    ],
    width: '156px',
    left: '106px'
  },
  { 
    title: '查看(V)',
    menuItems: [
      {
        title: '状态栏(S)',
        shortcut: '',
        enabled: true,
        handler: function() {console.log('状态栏');}
      }
    ],
    width: '138px',
    left: '162px'
  },
  { 
    title: '帮助(H)',
    menuItems: [
      {
        title: '查看帮助(H)',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('查看帮助'); }
      },
      {
        title: '关于记事本(A)',
        shortcut: '',
        enabled: true,
        handler: function() { $dlgAbout.show(); }
      },
    ],
    width: '166px',
    left: '216px'
  }
];
