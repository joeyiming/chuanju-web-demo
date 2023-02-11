// Test
// console.log('jQuery版本：' + $.fn.jquery);

const cardList = $('ul.card-list li');
const counts = 5;

function getCardItems(counts) {
	// cardItems 从 1 开始计数
	let items = [''];
	for (let i = 1; i <= counts; i++) {
		items.push($(`ul.card-list li:nth-of-type(${i})`));
		// console.log(i);
	}
	return items;
}
cardItems = getCardItems(counts);

const pageList = $('ul.page-list li');

function getPageItems(counts) {
	// pageItems 从 1 开始计数
	let items = [''];
	for (let i = 1; i <= counts; i++) {
		items.push($(`ul.page-list li:nth-of-type(${i})`));
		// console.log(i);
	}
	return items;
}
pageItems = getPageItems(counts);

// Cards Hover
cardList.hover(
	function () {
		// over
		$(this).addClass('hov');
		$(this).removeClass('hov-left');
		$(this).removeClass('hov-right');
	},
	function () {
		// out
		$(this).removeClass('hov');
	}
);

cardItems[4].hover(
	function () {
		// over
		cardItems[1].addClass('hov-left');
		cardItems[2].addClass('hov-left');
		cardItems[3].addClass('hov-left');
	},
	function () {
		// out
		cardItems[1].removeClass('hov-left');
		cardItems[2].removeClass('hov-left');
		cardItems[3].removeClass('hov-left');
	}
);
cardItems[5].hover(
	function () {
		// over
		cardItems[1].addClass('hov-left');
		cardItems[2].addClass('hov-left');
		cardItems[3].addClass('hov-left');
		cardItems[4].addClass('hov-left');
	},
	function () {
		// out
		cardItems[1].removeClass('hov-left');
		cardItems[2].removeClass('hov-left');
		cardItems[3].removeClass('hov-left');
		cardItems[4].removeClass('hov-left');
	}
);

cardItems[1].hover(
	function () {
		// over
		cardItems[2].addClass('hov-right');
		cardItems[3].addClass('hov-right');
		cardItems[4].addClass('hov-right');
		cardItems[5].addClass('hov-right');
	},
	function () {
		// out
		cardItems[2].removeClass('hov-right');
		cardItems[3].removeClass('hov-right');
		cardItems[4].removeClass('hov-right');
		cardItems[5].removeClass('hov-right');
	}
);
cardItems[2].hover(
	function () {
		// over
		cardItems[3].addClass('hov-right');
		cardItems[4].addClass('hov-right');
		cardItems[5].addClass('hov-right');
	},
	function () {
		// out
		cardItems[3].removeClass('hov-right');
		cardItems[4].removeClass('hov-right');
		cardItems[5].removeClass('hov-right');
	}
);
cardItems[3].hover(
	function () {
		// over
		cardItems[4].addClass('hov-right');
		cardItems[5].addClass('hov-right');
	},
	function () {
		// out
		cardItems[4].removeClass('hov-right');
		cardItems[5].removeClass('hov-right');
	}
);

// Card Click
cardList.click(function (e) {
	e.preventDefault();
	let index = $(this).index() + 1;
	pageItems[index].removeClass('hidden');
	pageItems[index].children('.pic_close').removeClass('hidden');
	hideCards();
});

$('.pic_close').click(function (e) {
	e.preventDefault();
	hidePages();
	showCards();
});

function hideCards() {
	cardList.addClass('hidden');
}
function showCards() {
	cardList.removeClass('hidden');
}
function hidePages() {
	pageList.addClass('hidden');
}
function showPages() {
	pageList.removeClass('hidden');
}

// Prepare Video Elements
let videoFiles = [
	'./static/video/zhangfei.mp4',
	'./static/video/guanyu.mp4',
	'./static/video/dianwei.mp4',
	'./static/video/caocao.mp4',
	'./static/video/douerdun.mp4'
];
// videoItems 从 1 开始计数
let videoItems = [''];
function makeVideo(files) {
	for (const src of files) {
		let v = document.createElement('video');
		v.src = src;
		v.controls = false;
		v.muted = true;
		v.autoplay = true;
		v.loop = true;
		v.style.height = '100%';
		v.style.width = '100%';
		v.style.objectFit = 'cover';
		v.style.zIndex = -1;
		v.style.position='absolute';
		v.style.top='0';
		v.style.left='0';
		videoItems.push(v);
	}
}
function pageAddVideo(pages,videos,counts){
	for (let i = 1; i <= counts; i++) {
		const page = pages[i];
		const video = videos[i];
		page.append(video);
		// console.log(page);
	}
}
makeVideo(videoFiles);
// console.log(videoItems);
pageAddVideo(pageItems,videoItems,counts);

