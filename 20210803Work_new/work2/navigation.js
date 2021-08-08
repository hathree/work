/* 使用平行的数据结构 */
const menu = [
    {
        title: '首页',
        subMenu: []
    },
    {
        title: '厦大概览',
        subMenu: [
            { title: '学校简介' },
            { title: '厦门大学章程' },
            { title: '校主平生' },
        ]
    },
    {
        title: '学部院系',
        subMenu: [
            { title: '人文与艺术学部' },
            { title: '社会科学学部' },
            { title: '自然科学学部' },
        ]
    },
    {
        title: '人才培养',
        subMenu: [
            { title: '学科' },
            { title: '师资' },
            { title: '本科生教育' },
        ]
    },
    {
        title: '学术科研',
        subMenu: [
            { title: '自然科学与技术' },
            { title: '人文与社会科学' },
        ]
    },
    {
        title: '社会服务',
        subMenu: [
            { title: '成果产业化' },
            { title: '大学科技园' },
        ]
    },
    {
        title: '大学文化',
        subMenu: [
            { title: '团委' },
            { title: '学生委员会' },
        ]
    },
    {
        title: '合作交流',
        subMenu: [
            { title: '国际交流与合作' },
            { title: '港澳台合作与交流' },
        ]
    },
    {
        title: '招生就业',
        subMenu: [
            { title: '招生' },
            { title: '就业' },
        ]
    },
    {
        title: '人才招聘',
        subMenu: [
            { title: '人才招聘网' },
            { title: '博士后' },
        ]
    },

];


let navContent = '';
menu.forEach(item => {
    /* 二级菜单的内容 */
    let subNavContent = '';
    item.subMenu.forEach(item => {
        subNavContent += `
        <li>${item.title}</li>
        `;
    });
    /* 一级菜单的内容 */
    navContent += `
    <div class="dropdown">
        <span>${item.title}</span>
        <ul class="dropdown-content">
        ${subNavContent}
        </ul>
    </div>
    `
});

/* document.getElementById('nav') */
const nav = document.querySelector('#nav'); /* 第一个#nav */
nav.innerHTML = navContent; /* 写入到#nav */

/* 为每个下拉菜单绑定事件 */
const dropdowns = document.querySelectorAll('.dropdown'); /* 所有.dropdown元素 */
dropdowns.forEach(dropdown => {
    /*     const span = dropdown.querySelector('span');
        const ul = dropdown.querySelector('ul');
        span.addEventListener('mouseover', () => {
            ul.style.display = 'block';
        });
        span.addEventListener('mouseleave', () => {
            ul.style.display = 'none';
        }); */
    const ul = dropdown.querySelector('ul');
    dropdown.addEventListener('mouseover', () => {
        ul.style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
        ul.style.display = 'none';
    });

});

