// ==UserScript==
// @name          FriendFeed Nicks
// @namespace     http://purepistos.net/userjs
// @description   This UserJS changes full names to nicknames on friendfeed.com .
// @include       http://www.friendfeed.com/*
// @include       http://friendfeed.com/*
// ==/UserScript==

// by: Pistos
// Licence: MIT licence
// Copyright (c) Pistos 2009
//
// Version: 0.9.0
// Last updated: 2009-05-21

var ffn_jQuery;
if( typeof unsafeWindow != 'undefined' ) {
    // Greasemonkey
    ffn_jQuery = unsafeWindow.jQuery;
} else {
    // Other (e.g. Opera)
    ffn_jQuery = jQuery;
}

function change_names_to_nicks() {
    ffn_jQuery( 'div.name a.l_profile, div.likes a.l_profile' ).each( function() {
        var link = ffn_jQuery(this);
        if( link.attr( 'href' ) != '/' + link.attr( 'sid' ) ) {
            ffn_jQuery(this).text( ffn_jQuery(this).attr( 'href' ).substr( 1 ) );
        }
    } );
}

ffn_jQuery( '#feed' ).bind( 'ajaxSuccess', function() {
    change_names_to_nicks();
} );

ffn_jQuery("#feed").ajaxSuccess(function(evt, request, settings){
    change_names_to_nicks();
});

change_names_to_nicks();