/* Japanese initialisation for the jQuery UI date picker plugin. */
/* Written by Kentaro SATO (kentaro@ranvis.com). */
jQuery(function($){
	$.datepicker.regional['ja'] = {
		closeText: '\u9589\u3058\u308b',
		prevText: '&#x3C;\u524d',
		nextText: '\u6b21&#x3E;',
		currentText: '\u4eca\u65e5',
		monthNames: ['1\u6708','2\u6708','3\u6708','4\u6708','5\u6708','6\u6708',
		'7\u6708','8\u6708','9\u6708','10\u6708','11\u6708','12\u6708'],
		monthNamesShort: ['1\u6708','2\u6708','3\u6708','4\u6708','5\u6708','6\u6708',
		'7\u6708','8\u6708','9\u6708','10\u6708','11\u6708','12\u6708'],
		dayNames: ['\u65e5\u66dc\u65e5','\u6708\u66dc\u65e5','\u706b\u66dc\u65e5','\u6c34\u66dc\u65e5','\u6728\u66dc\u65e5','\u91d1\u66dc\u65e5','\u571f\u66dc\u65e5'],
		dayNamesShort: ['\u65e5','\u6708','\u706b','\u6c34','\u6728','\u91d1','\u571f'],
		dayNamesMin: ['\u65e5','\u6708','\u706b','\u6c34','\u6728','\u91d1','\u571f'],
		weekHeader: '\u9031',
		dateFormat: 'yy/mm/dd',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ja']);
});
