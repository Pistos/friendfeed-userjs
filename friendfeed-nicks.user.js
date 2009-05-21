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

var ffn_jQuery;
if( typeof unsafeWindow != 'undefined' ) {
    ffn_jQuery = unsafeWindow.jQuery;
} else {
    ffn_jQuery = jQuery;
}

ffn_jQuery( 'div.name > a' ).each( function() {
    if( ffn_jQuery(this).text().indexOf( ' ' ) > -1 ) {
        ffn_jQuery(this).text( ffn_jQuery(this).attr( 'href' ).substr( 1 ) );
    }
} );