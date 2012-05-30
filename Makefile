JS_SOURCES = js/marceditor_control_fields_conf.js\
             js/marceditor.js

CSS_SOURCES = css/marceditor.css

YUI = /usr/bin/yui-compressor

YUI_OPTIONS=--charset utf8 --preserve-semi --nomunge --disable-optimizations 

all: js css

js:
	@for i in $(basename $(JS_SOURCES)) ; do \
		$(YUI) $(YUI_OPTIONS) -o $$i.min.js $$i.js ; \
	done

css:
	@for i in $(basename $(CSS_SOURCES)) ; do \
		$(YUI) $(YUI_OPTIONS) -o $$i.min.css $$i.css ; \
	done

clean:
	@for i in $(basename $(JS_SOURCES)) ; do \
		rm $$i.min.js ; \
	done
	@for i in $(basename $(CSS_SOURCES)) ; do \
		rm $$i.min.css ; \
	done
.PHONY: js css
