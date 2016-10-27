<!DOCTYPE html>
{%* 使用html插件替换普通html标签，同时注册JS组件化库 *%}
{%html framework="front:static/mod.js"%}
    {%* 使用head插件替换head标签，主要为控制加载同步静态资源使用 *%}
	{%head%}
	    <meta charset="utf-8"/>
    	<title>fisp + CodeIgniter framework demo</title>
	    <link rel="stylesheet" type="text/css" href="/static/css/reset.css">
	    <link rel="stylesheet" type="text/css" href="/static/css/common.less">
	{%/head%}
	{%* 使用body插件替换body标签，主要为可控制加载JS资源 *%}
	{%body%}
		{%block name="content"%}{%/block%}
	{%/body%}
{%/html%}