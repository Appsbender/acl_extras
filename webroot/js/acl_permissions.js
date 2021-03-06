/**
 * AclPermissions
 *
 * for AclPermissionsController (acl plugin)
 */
var AclPermissions = {};

/**
 * functions to execute when document is ready
 *
 * @return void
 */
AclPermissions.documentReady = function() {
    AclPermissions.permissionToggle();
    AclPermissions.tableToggle();
    $('tr:has(div.controller)').addClass('controller-row');
    $('tr:has(div.plugin)').addClass('plugin-row');
}

/**
 * Toggle permissions (enable/disable)
 *
 * @return void
 */
AclPermissions.permissionToggle = function() {
    $('img.permission-toggle').unbind();
    $('img.permission-toggle').click(function() {
        var $this = $(this);
        var rel = $this.attr('rel');
        var rel_e = rel.split('-');
        var acoId = rel_e[0];
        var aroId = rel_e[1];

        // show loader
        $this.attr('src', Croogo.basePath+'img/ajax/circle_ball.gif');

        // prepare loadUrl
        var loadUrl = Croogo.basePath+'admin/acl_extras/acl_extras_permissions/toggle/';
        loadUrl    += acoId+'/'+aroId+'/';

        // now load it
        $this.parent().load(loadUrl, function() {
            AclPermissions.permissionToggle();
        });

        return false;
    });
}

/**
 * Toggle table rows (collapsible)
 *
 * @return void
 */
AclPermissions.tableToggle = function() {
    $('table div.controller').click(function() {
        var $this = $(this);
        $('.controller-'+$this.text()).toggle();
        if ($this.hasClass('expand')) {
            $this.removeClass('expand');
            $this.addClass('collapse');
        } else {
            $this.removeClass('collapse');
            $this.addClass('expand');
        }
    });

    $('table div.plugin').click(function() {
        var $this = $(this);
        $('.plugin-'+$this.text()).toggle();
        if ($this.hasClass('expand')) {
            $this.removeClass('expand');
            $this.addClass('collapse');
        } else {
            $this.removeClass('collapse');
            $this.addClass('expand');
        }
    });

}

/**
 * document ready
 *
 * @return void
 */
$(document).ready(function() {
    if (Croogo.params.controller == 'acl_extras_permissions') {
        AclPermissions.documentReady();
    }
});