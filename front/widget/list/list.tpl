<div class="fis-widget-list">
	<ul>
	{%foreach $list as $item%}
		<li>{%$item%}</li>
	{%/foreach%}
	</ul>
	<button class="btn">Click me</button>
</div>

{%script%}
	require('front:widget/list/list.js').create('.fis-widget-list', {})
{%/script%}