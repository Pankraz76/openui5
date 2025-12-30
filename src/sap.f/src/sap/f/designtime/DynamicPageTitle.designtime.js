/*!
 * ${copyright}
 */

// Provides the Design Time Metadata for the sap.f.DynamicPageTitle control
sap.ui.define([],
	function () {
		"use strict";

		return {
			aggregations: {
				heading: {
					domRef: ":sap-domref .sapFDynamicPageTitleMainHeadingInner",
					ignore: oElement => !oElement.getHeading()
				},
				expandedHeading: {
					domRef: oElement => oElement.$("expand-heading-wrapper").get(0),
					ignore: oElement => oElement.getHeading() || !oElement.getExpandedHeading()
				},
				snappedHeading: {
					domRef: oElement => oElement.$("snapped-heading-wrapper").get(0),
					ignore: oElement => oElement.getHeading() || !oElement.getSnappedHeading()
				},
				actions: {
					domRef: ":sap-domref .sapFDynamicPageTitleMainActions",
					actions: {
						split: {
							changeType: "splitMenuButton"
						},
						combine: {
							changeType: "combineButtons"
						},
						move: {
							changeType: "moveActions"
						}
					}
				},
				content: {
					domRef: ":sap-domref .sapFDynamicPageTitleMainContent",
					actions: {
						move: {
							changeType: "moveControls"
						}
					}
				},
				snappedContent: {
					domRef: oElement => oElement.$("snapped-wrapper").get(0),
					actions: {
						move: {
							changeType: "moveControls"
						}
					}
				},
				expandedContent: {
					domRef: oElement => oElement.$("expand-wrapper").get(0),
					actions: {
						move: {
							changeType: "moveControls"
						}
					}
				},
				snappedTitleOnMobile: {
					ignore: true
				},
				navigationActions: {
					ignore: true
				},
				breadcrumbs: {
					ignore: true
				}
			},
			actions: {
				remove: {
					changeType: "hideControl"
				},
				reveal: {
					changeType: "unhideControl"
				}
			},
			name: {
				singular: "DYNAMIC_PAGE_TITLE_NAME",
				plural: "DYNAMIC_PAGE_TITLE_NAME_PLURAL"
			}
		};

	});