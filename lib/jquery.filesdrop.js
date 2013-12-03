/* jshint eqeqeq:true, curly:true, forin:true, indent:4, nonew:false, quotmark:single, strict:true, jquery:true */

/* jshint -W015 */
;(function ($, window, document, undefined) {
/* jshint +W015 */
    'use strict';

    var pluginName = 'filesDrop',
        defaults = {
            containerCls: 'files-drop',
            filesOverCls: 'files-over',
            messageCls: 'message',
            buttonCls: 'button upload',

            localize: {
                message: 'Drag and drop your file<br/>Or select from a folder',
                button: 'Upload'
            }
        };

    function Plugin (element, options) {
        this.element = $(element);
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            this.wrap();
            this.bindEvents();
        },

        /*
            <input type="file" name="files" class="input-cls" />
            --->
            <div class="">
                <div class="message">
                    Drag and drop your file<br/>Or select from a folder
                </div>
                <div class="upload button">
                    Upload
                    <input type="file" name="files" class="" />
                </div>
            </div>
         */
        wrap: function () {
            var container = $(document.createElement('div')),
                message = $(document.createElement('div')),
                button = $(document.createElement('div'));

            container.addClass(this.settings.containerCls + ' ' + this.element[0].className);
            message.addClass(this.settings.messageCls).html(this.settings.localize.message);
            button.addClass(this.settings.buttonCls).html(this.element.val() || this.settings.localize.button);

            this.element.removeClass();

            container.insertBefore(this.element);
            container.append(message);
            container.append(button);
            button.append(this.element);

            this.container = container;
        },

        bindEvents: function () {

        }
    };

    $.fn[ pluginName ] = function (options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data( this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };
}) (jQuery, window, document);