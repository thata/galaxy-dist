(function(){var b=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.tool_link=b(function(e,l,d,k,j){d=d||e.helpers;var h="",c,g,f="function",i=this.escapeExpression;h+='<a class="';g=d.id;if(g){c=g.call(l,{hash:{}})}else{c=l.id;c=typeof c===f?c():c}h+=i(c)+' tool-link" href="';g=d.link;if(g){c=g.call(l,{hash:{}})}else{c=l.link;c=typeof c===f?c():c}h+=i(c)+'" target="';g=d.target;if(g){c=g.call(l,{hash:{}})}else{c=l.target;c=typeof c===f?c():c}h+=i(c)+'" minsizehint="';g=d.min_width;if(g){c=g.call(l,{hash:{}})}else{c=l.min_width;c=typeof c===f?c():c}h+=i(c)+'">';g=d.name;if(g){c=g.call(l,{hash:{}})}else{c=l.name;c=typeof c===f?c():c}h+=i(c)+"</a> ";g=d.description;if(g){c=g.call(l,{hash:{}})}else{c=l.description;c=typeof c===f?c():c}h+=i(c);return h})})();