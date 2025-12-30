/*!
 * ${copyright}
 */

// Provides the Design Time Metadata for the sap.f.semantic.SemanticPage control
sap.ui.define([],
	function() {
		"use strict";

		var fnShouldIgnoreSingleAggregation = (oControl, sAggregationGetter) => !(oControl &&
            oControl[sAggregationGetter] &&
            oControl[sAggregationGetter]() &&
            oControl[sAggregationGetter]().getDomRef());

		var fnIgnoreTitleActionsAggregation = function (oControl, sAggregationGetter) {
			var $ControlDomRef;

			if (!oControl) {
				return true;
			}

			$ControlDomRef = oControl.$().find("sapFDynamicPageTitleActionsBar");
			return !!($ControlDomRef.length > 0 && oControl[sAggregationGetter]().length > 0);
		};

		return {
			aggregations : {
				titleHeading : {
					domRef : oControl => oControl.getTitleHeading().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getTitleHeading")
				},
				titleSnappedHeading : {
					domRef : oControl => oControl.getTitleHeading().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getTitleSnappedHeading")
				},
				titleExpandedHeading : {
					domRef : oControl => oControl.getTitleHeading().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getTitleExpandedHeading")
				},
				titleSnappedOnMobile : {
					ignore : true
				},
				titleBreadcrumbs : {
					domRef : oControl => oControl.getTitleBreadcrumbs().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getTitleBreadcrumbs")
				},
				titleSnappedContent : {
					domRef : ":sap-domref .sapFDynamicPageTitleMainSnapContentVisible",
					actions : {
						move : {
							changeType: "moveControls"
						}
					},
					ignore : oControl => !!(!oControl || oControl.getTitleSnappedContent().length === 0 || oControl.getHeaderExpanded())
				},
				titleExpandedContent : {
					domRef : ":sap-domref .sapFDynamicPageTitleMainExpandContentVisible",
					actions : {
						move : {
							changeType: "moveControls"
						}
					},
					ignore : oControl => !!(!oControl || oControl.getTitleExpandedContent().length === 0 || !oControl.getHeaderExpanded())
				},
				titleContent : {
					domRef : ":sap-domref .sapFDynamicPageTitleMain > .sapFDynamicPageTitleMainInner > .sapFDynamicPageTitleMainContent",
					actions: {
						move: {
							changeType: "moveControls"
						}
					},
					ignore : oControl => !!(!oControl || oControl.getTitleContent().length === 0)
				},
				titleMainAction : {
					domRef : oControl => oControl.getTitleMainAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getTitleMainAction")
				},
				editAction : {
					domRef : oControl => oControl.getEditAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getEditAction")
				},
				addAction : {
					domRef : oControl => oControl.getAddAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getAddAction")
				},
				deleteAction : {
					domRef : oControl => oControl.getDeleteAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getDeleteAction")
				},
				copyAction : {
					domRef : oControl => oControl.getCopyAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getCopyAction")
				},
				flagAction : {
					domRef : oControl => oControl.getFlagAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getFlagAction")
				},
				favoriteAction : {
					domRef : oControl => oControl.getFavoriteAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getFavoriteAction")
				},
				fullScreenAction : {
					domRef : oControl => oControl.getFullScreenAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getFullScreenAction")
				},
				exitFullScreenAction : {
					domRef : oControl => oControl.getExitFullScreenAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getExitFullScreenAction")
				},
				closeAction : {
					domRef : oControl => oControl.getCloseAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getCloseAction")
				},
				titleCustomTextActions: {
					domRef : ":sap-domref .sapFDynamicPageTitleActionsBar",
					ignore : oControl => fnIgnoreTitleActionsAggregation(oControl, "getTitleCustomTextActions")
				},
				titleCustomIconActions : {
					domRef : ":sap-domref .sapFDynamicPageTitleActionsBar",
					ignore : oControl => fnIgnoreTitleActionsAggregation(oControl, "getTitleCustomIconActions")
				},
				headerContent : {
					domRef : ":sap-domref .sapFDynamicPageHeaderContent",
					actions : {
						move : {
							changeType: "moveControls"
						}
					},
					ignore : oControl => !(oControl && oControl.getHeaderContent().length > 0)
				},
				content : {
					domRef : ":sap-domref .sapFDynamicPageContent",
					ignore : oControl => !(oControl && oControl.getContent())
				},
				footerMainAction : {
					domRef : oControl => oControl.getFooterMainAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getFooterMainAction")
				},
				messagesIndicator : {
					domRef : oControl => oControl.getMessagesIndicator().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getMessagesIndicator")
				},
				draftIndicator : {
					domRef : oControl => oControl.getDraftIndicator().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getDraftIndicator")
				},
				positiveAction : {
					domRef : oControl => oControl.getPositiveAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getPositiveAction")
				},
				negativeAction : {
					domRef : oControl => oControl.getNegativeAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getNegativeAction")
				},
				footerCustomActions : {
					domRef : ":sap-domref .sapFDynamicPageActualFooterControl",
					ignore : oControl => !(oControl &&
                    oControl.getFooterCustomActions() &&
                    oControl.getFooterCustomActions().length > 0)
				},
				discussInJamAction : {
					domRef : oControl => oControl.getDiscussInJamAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getDiscussInJamAction")
				},
				saveAsTileAction : {
					domRef : oControl => oControl.getSaveAsTileAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getSaveAsTileAction")
				},
				shareInJamAction : {
					domRef : oControl => oControl.getShareInJamAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getShareInJamAction")
				},
				sendMessageAction : {
					domRef : oControl => oControl.getSendMessageAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getSendMessageAction")
				},
				sendEmailAction : {
					domRef : oControl => oControl.getSendEmailAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getSendEmailAction")
				},
				printAction : {
					domRef : oControl => oControl.getPrintAction().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "getPrintAction")
				},
				customShareActions : {
					domRef : oControl => oControl._getActionSheet().getDomRef(),
					ignore : oControl => fnShouldIgnoreSingleAggregation(oControl, "_getActionSheet")
				},
				landmarkInfo: {
					ignore: true
				}
			},
			scrollContainers : [{
				domRef : ":sap-domref .sapFDynamicPageContentWrapper",
				aggregations : function(oElement) {
					if (oElement && oElement.getDomRef() &&
						(oElement.getDomRef().querySelector(".sapFDynamicPageHeaderPinned") ||
						oElement.getPreserveHeaderStateOnScroll())) {
						return ["content"];
					} else {
						return ["headerContent", "content"];
					}
				}
			},
			{
				domRef : oElement => oElement.$("vertSB-sb").get(0)
			}],
			templates: {
				create: "sap/f/designtime/SemanticPage.create.fragment.xml"
			}
		};

	});