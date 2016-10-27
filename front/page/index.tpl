{%extends file="front/page/layout.tpl"%}
{%block name="content"%}
	<h1>Todo list</h1>
    <div class="page-wrapper fis-page-index">
        {%widget name="front:widget/list/list.tpl"%}
    </div>
{%/block%}
